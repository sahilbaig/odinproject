
// var searchButton = document.getElementById("search")
// searchButton.onclick = () =>{
    
//     searchfor=document.getElementById("input").value
//     apiCall(searchfor)
// }

// var reload=document.getElementById("loadnew")

// reload.onclick = () =>{
//     console.log("me so clicked");
//     apiCall()
// }


var apiCall = (searchfor) =>
{
    const img = document.querySelector('img');
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=kxVRGdQFzlvu3Cb4rxmCrCS9UxiueMu3&s=${searchfor}`, {mode: 'cors'})
    .then( (response)=>{
        return response.json();
        })
    .then((response)=>{
        img.src = response.data.images.original.url;
        })
    .catch(()=>{
        console.log("np dtaa")
    })
}

