
const players = (symbol,player_name) =>{
    return {symbol,player_name}
}


const player1=players("X","Player1")
const player2=players("O","Player2")
playerList=[player1,player2]


const tictac =() =>{
    // var arr=Array(3).fill(Array(3));
    
    var symbol='#';
    var current_player=0;
    var arr=[
        ["_","_","_",],
        ["_","_","_"],
        ["_","_","_"]
    ]

    const reset = () =>{
        arr=[
            ["_","_","_",],
            ["_","_","_"],
            ["_","_","_"]
        ]
        winner=document.getElementById("winner")
        winner.innerHTML=""
        clearTable()
        genrateTable();
    }
    const changeSymbol = (playerSymbol) =>{
        symbol=playerSymbol
    }
    const checkDiagnoal = ()=>{
        var d1=true;
        var d2=true;
        for(var i=0;i<3;i++)
        {
            if(arr[i][i]!=arr[0][0] || arr[i][i]=="_") 
            {
                d1=false;
            }

            if(arr[i][2-i]!=arr[0][2] || arr[i][2-i]=="_" )
            {
                d2=false;
            }
        }

        return (d1||d2);
    }

    const checkRow = () =>
    {   
        for(var i=0;i<3;i++)
        {
            for( var j=1;j<3;j++)
            {
                if(arr[i][j]!=arr[i][j-1] || arr[i][j]=="_")
                {
                    break;
                }
                else if(j==2)
                {
                    return true;
                }
            }        
        }
        return false;
    }

    const checkCol = () =>{   
        var flag=true;
        for(var i=0;i<3;i++)
        { 
            for(j=1;j<3;j++)
            {
                if(arr[j][i]!=arr[j-1][i] || arr[j][i]=='_')
                {
                    flag=false;
                    break;
                }
                if(j==2) return true;
            }            
        }

        
        return flag;
    }

    const result = () =>{
            return (checkCol()||checkDiagnoal()||checkRow())
        
    }   


    const clearTable = () =>{
        for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++)
            {
                var block=document.getElementsByName(String(i)+String(j));        
                block[0].innerHTML=""
            }
        }

    }

    const genrateTable=()=>{
        current_player^= 1
        for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++)
            {
                var block=document.getElementsByName(String(i)+String(j));        
                const btn = document.createElement("button");
                btn.innerHTML = arr[i][j];
                if (result()==false)
                {
                    btn.onclick = function()
                    {
                        handleClick(this,symbol)
                    }
                }
                btn.setAttribute("i",i)
                btn.setAttribute("j",j)
                

                block[0].appendChild(btn);
            }
        }
    }

    const handleClick=(x,symbol)=>{
        var i=x.getAttribute("i")
        var j=x.getAttribute("j")
        if (arr[i][j]=="_"){
            arr[i][j]=playerList[current_player].symbol
            if(result()==true){
                end = document.getElementById("winner");
                end.innerHTML="the winner is "+ playerList[current_player].player_name
            }
        }
        

        clearTable()
        genrateTable()
    }

    return{genrateTable,reset};
}


const table=tictac();
table.genrateTable();

reset=document.getElementById("reset")
reset.onclick=function(){
    table.reset();
}
