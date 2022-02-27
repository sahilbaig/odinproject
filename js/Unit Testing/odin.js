function capitalize(string){
    return string.toUpperCase()

}

function reverseString(string){
    let revString=""
    for(var i=string.length-1;i>=0;i--){
        revString+=string[i];
    }
    return revString;
}

function calculator(num1,num2,operation){
    
    if(operation=="+"){
        return num1+num2
    }
    else if(operation=="-"){
        return num1-num2;
    }
    else if(operation=="*"){
        return num1*num2;
    }
    else if(operation=="/"){
        return num1/num2;
    }
    else{
        return "Not a valid operation"
    }
    
}

function analyzeArray(arr){
    var obj= {
        average: 0,
        min: Infinity,
        max: -Infinity,
        length: 0
      };

    var sum=0;
      
    for(var i=0;i<arr.length;i++){
        sum+=parseInt(arr[i])
        
        if(obj["min"]>arr[i]){
            obj["min"]=arr[i]
        }

        if(obj["max"]<arr[i]){
            obj["max"]=arr[i];
        }
    }
    obj["length"]=arr.length;
    obj["average"]=sum/arr.length;
    return obj
}
  
export  {capitalize,reverseString,calculator,analyzeArray}