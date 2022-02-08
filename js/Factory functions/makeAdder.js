const makeAdder=(x)=>{
    return function(y){
        return x+y;
    }
}


var add5 = makeAdder(5);
console.log(add5(2));
