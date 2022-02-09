const tictac =() =>{
    // var arr=Array(3).fill(Array(3));
    
    var symbol='#';
    var winner=0;
    var arr=[
        [1,2,3,],
        [4,5,6],
        [7,8,9]
    ]

    const changeSymbol = (playerSymbol) =>{
        symbol=playerSymbol
    }
    const checkDiagnoal = ()=>{
        var d1=true;
        var d2=true;
        for(var i=0;i<3;i++)
        {
            if(arr[i][i]!=arr[0][0])
            {
                d1=false;
            }

            if(arr[i][2-i]!=arr[0][2] )
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
                if(arr[i][j]!=arr[i][j-1] )
                {
                    flag=false;
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
        for(var i=0;i<3;i++)
        {
            for( var j=1;j<3;j++)
            {
                if(arr[j][i]!=arr[j][i-1] )
                {
                    flag=false;
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

    const result = () =>{
        if(winner!=0){
            return (checkCol()||checkDiagnoal()|| checkRow())
        }
        return false
        
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
        for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++)
            {
                var block=document.getElementsByName(String(i)+String(j));        
                const btn = document.createElement("button");
                btn.innerHTML = arr[i][j];
                btn.setAttribute("i",i)
                btn.setAttribute("j",j)
                btn.onclick = function()
                {
                    handleClick(this,symbol)
                }
                block[0].appendChild(btn);
            }
        }
    }

    const handleClick=(x,symbol)=>{
        var i=x.getAttribute("i")
        var j=x.getAttribute("j")
        
        arr[i][j]=symbol
        clearTable()
        genrateTable()
    }

    return{result,genrateTable,handleClick,changeSymbol,symbol,winner};
}

const table=tictac();
table.genrateTable();

const players = (symbol,player_name) =>{
    const playTurn = () =>{
        table.changeSymbol(symbol);
    } 
    const showTable=table.genrateTable;     
    return {showTable,playTurn ,symbol,player_name}
}

const player1=players("X","somebody")
const player2=players("O","something")
playerList=[player1,player2]