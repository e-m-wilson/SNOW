import getDate from "./myModule.js";

document.querySelector("#btn").addEventListener('click', async () => {
    
        let div = document.querySelector("#results");
        let q = document.querySelector('#query');


        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${q.value}`);
        let parsedResponse = await response.json();
        let gameArray = parsedResponse.game_indices;
        for(let i = 0; i < gameArray.length; i++) {

            let p = document.createElement('p');
            p.innerHTML = gameArray[i].version.name;
            div.appendChild(p);
        }
    

});