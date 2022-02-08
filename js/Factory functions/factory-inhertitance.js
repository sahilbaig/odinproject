const person=(name,age) =>{
    const sayName = ()=>{
        console.log(`my name is ${name}`)
    }
    const SayAge =() =>{
        console.log(`I am ${age} old`)
    }
    return {sayName,SayAge}
}

const Nerd =(name,age) =>{
    const saywow = person(name,0).sayName;
    const details =() =>{

        console.log(`I am ${age} old and ${name}`);
    }

    const AgeIncrease=()=>{
        age++;
    }

    return {details,AgeIncrease,saywow};
}

const jeff = Nerd("jeff",0);

jeff.saywow()