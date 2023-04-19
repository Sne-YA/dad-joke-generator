const btnEl = document.getElementById("btn")
 const apiKey = "5doBTObuFUVZO6MFCOQ7cg==vNOvT69kCGNERMRM";
const option = {
   method : 'GET', 
   header: { 'X-Api-Key': apiKey},
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {

   try {
      jokeEl.innerText = "Loading.."
      btnEl.disabled= true;
      btnEl.innerText = "loading.."
   
      const response = await fetch(apiURL, option);
      const data = await response.json();
   
      btnEl.disabled= false;
      btnEl.innerText = "Tell me a joke"
   
      jokeEl.innerText = data[0].joke;
   
   }
      
   catch (error) {
   btnEl.innerText = "An error happened, try again later"
   console.log(error);
   }  
   }



 btnEl.addEventListener("onclick",getJoke)
 