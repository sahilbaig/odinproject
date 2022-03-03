const img = document.querySelector('img')
async function getCats(){
    const response= await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=kxVRGdQFzlvu3Cb4rxmCrCS9UxiueMu3&s=dogs`, {mode: 'cors'})
    const catData= await response.json();
    img.src = catData.data.images.original.url;

}
getCats()
console.log("meow meow") 
