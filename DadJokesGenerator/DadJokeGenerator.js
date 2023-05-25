const btnEl = document.getElementById("btn") 
const jokeEl = document.getElementById("joke");
const apiKey = "4r0DZecuTOjaN8zTXkSyUw==ML4s0oAvJiRgV6NE";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit="

async function getJoke(){

    try {
        jokeEl.innerHTML = "Updating...";
    btnEl.disablet = true;
    btnEl.innerHTML = "Loading..."
    const response = await fetch(apiURL, options);
    const data = await response.json()

    btnEl.disablet = false;
    btnEl.innerHTML = "Tell me a joke"
    
    jokeEl.innerHTML = data[0].joke
    } catch (error) {
        jokeEl.innerHTML = "An error happened, try again later!"
        btnEl.disablet = false;
        btnEl.innerHTML = "Tell me a joke"
        console.log(error);
    }

    
}

btnEl.addEventListener("click" , getJoke)