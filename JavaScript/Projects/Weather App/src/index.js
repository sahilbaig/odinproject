// const search = new Promise((resolve,reject)=>{
//     resolve("woww")
//     reject("not so wow")
// })

// search.then(function(ww){
//     console.log(ww)
// }).catch(function(err){
//     console.log(err)
// })


function searchBar(){
    let search=document.createElement("input")
    search.id="search"
    let button=document.createElement("button")
    button.innerHTML="Search"
    document.body.append(search)
    document.body.append(button)

    button.onclick=()=>{
        a=document.getElementById("search")
        creation(a.value)
    }
}
searchBar()


async function apiCall (location){
    try{
        const data=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bfef8e61e3f177bea0045db6a6471a27`)
        const dataJson=await (await data).json()
        console.log(dataJson)
        return dataJson
    }
    catch{
        return "Some big error"
    }
    
}

async function creation(location){
    try{
        
        const data=await apiCall(location)
        const div=document.createElement("div")
        const min=document.createElement("p")
        min.innerHTML="Temperature now:"+data["main"]["temp"]+" kelvins"
        const max=document.createElement("p")
        max.innerHTML="Temperature max:"+data["main"]["temp_max"]+" kelvins"
        
        const current=document.createElement("p")
        current.innerHTML="Temperature min:"+data["main"]["temp_min"]+" kelvins"
        
        div.append(current)
        div.append(min)
        div.append(max)
        document.body.append(div)
    }
    catch{
        console.log("big thing")
    }

}

creation()
