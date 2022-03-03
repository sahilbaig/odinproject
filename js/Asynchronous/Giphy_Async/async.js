let a = new Promise((resolve, reject)=>{
  
  let res=1+1;
  if(res==23){
    resolve("This a success")
  }
  else{
    reject("Not so success");
  }

});

a.then((messages)=>{
  console.log(messages)
}).catch((messages)=>{
  console.log("something from other siide")
})