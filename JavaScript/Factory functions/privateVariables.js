const person=()=>{
    firstname="something";
    age=11;
    
    const call=()=>{
        return age; 
    }

    return {call};

}

newPerson= person();
console.log(newPerson.call())