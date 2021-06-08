
// Promises

// GET https://icanhazdadjoke.com

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// Using Promisse

/*

const generateJokes = () =>{
    const setHeaders = {
        headers :{
            Accept : 'application/json'
        }
    }



    fetch('https://icanhazdadjoke.com', setHeaders)
    .then((res) =>{
      return  res.json();
    }).then((data) =>{
        return  jokes.innerHTML = data.joke;
    }).catch((error) =>{
        console.log(error);
    })
}

*/


// Same Job Using Async / await

const generateJokes = async () =>{
    try{
        const setHeaders = {
            headers :{
                Accept : 'application/json'
            }
        }
    
        const res = await fetch('https://icanhazdadjoke.com', setHeaders);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(err){
        console.log(`The error is ${err}`);
    }
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();

