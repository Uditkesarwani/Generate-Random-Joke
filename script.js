
let suggest=document.querySelector(".suggest");
let btn=document.querySelector(".btn");

function loading(){        // this function is using on loading the page ang generate the joke
  getJoke();
}
loading();

 btn.addEventListener('click',getJoke);
async function getJoke(){
  const jokeData=await fetch('https://icanhazdadjoke.com/',{
    headers:{
      'Accept':'application/json'
    }

  });
  const jokeObj=await jokeData.json();
  suggest.innerText=jokeObj.joke;
}

