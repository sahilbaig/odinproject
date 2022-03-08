function makeFunc() {
    var name = 'Mozilla';
    var count=0;
    function displayName() {
      console.log(name);
    }
    function someother(){
        console.log("someother ran");
    }

    const f1=()=>{
        count++;
        console.log(count)
    }
    return {someother,displayName,f1}
  }
var myFunc = makeFunc();
myFunc.f1()
myFunc.f1()
myFunc.f1()
