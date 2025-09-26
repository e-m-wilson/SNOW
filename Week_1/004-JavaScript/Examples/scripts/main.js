import getDate from "./myModule.js";

document.querySelector("#btn").addEventListener('click', async () => {
    
    let container = document.querySelector('#container');
    let div = document.querySelector('#result');
    

    if(div) {
        let response = await fetch('https://api.chucknorris.io/jokes/random');
        let parsedResponse = await response.json();
        div.innerHTML = parsedResponse.value;
    } else {
        let myDiv = document.createElement('div');
        myDiv.id = 'result';
        let response = await fetch('https://api.chucknorris.io/jokes/random');
        let parsedResponse = await response.json();
        myDiv.innerHTML = parsedResponse.value;
        container.appendChild(myDiv);
    }
    

});


document.querySelector('#btn2').addEventListener('click', getDate);
