const factoryFunction=()=>{
    const name="something";
    const age=11;
    const sayName = ()=>{
        console.log(name)
    }
    return {name,age,sayName};
}

var person=factoryFunction();
person.sayName();