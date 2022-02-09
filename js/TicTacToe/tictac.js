const tictac =() =>{
    // var arr=Array(3).fill(Array(3));
    
    var arr=[
        [0,1,0,],
        [0,0,1],
        [,0,0]
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
    return{arr,result};
}

const player=tictac();
console.log(player.result())