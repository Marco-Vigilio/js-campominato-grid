/**
 * 
 * L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
 * Ogni cella ha un numero progressivo, da 1 a 100. 
 * Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
 * Quando l'utente clicca su ogni cella, 
 * la cella cliccata si colora di azzurro ed emetto un messaggio in console 
 * con il numero della cella cliccata.
 * 
 */



const bottone = document.querySelector("#play");

bottone.addEventListener("click", function(){

    let startGame = "";
    
    let griglia = document.querySelector(".griglia");

    for(let i = 0; i < 64; i++){
            let cella = document.createElement("div");
            let num = cella.append(i+1);
            cella.classList.add("cella");
            griglia.appendChild(cella);
    }

    //griglia.innerHTML = startGame;
});


