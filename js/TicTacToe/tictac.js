const tictac =() =>{
    // var arr=Array(3).fill(Array(3));
    
    var arr=[
        [0,0,0,],
        [0,0,0],
        [0,0,0]
    ]

    var players=
    [
        {}
    ]
    const checkDiagnoal = ()=>{
        var d1=true;
        var d2=true;
        for(var i=0;i<3;i++)
        {
            if(arr[i][i]!=arr[0][0])
            {
                d1=false;
            }

            if(arr[i][2-i]!=arr[0][2])
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
                if(arr[i][j]!=arr[i][j-1])
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
                if(arr[j][i]!=arr[j][i-1])
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
        return (checkCol()||checkDiagnoal()|| checkRow())
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
                    handleClick(this)
                }
                block[0].appendChild(btn);
            }
        }
    }

    const handleClick=(x)=>{
        var i=x.getAttribute("i")
        var j=x.getAttribute("j")
        
        arr[i][j]="X"
        clearTable()
        genrateTable()
    }

    return{result,genrateTable,handleClick};
}

const table=tictac();
table.genrateTable();

const players = (symbol,player_name) =>{
    const playTurn= table.handleClick;
    const showTable=table.genrateTable;
    return {showTable,playTurn ,symbol,player_name}
}

const player1=players("X","somebody")
const player2=players("0","something")