console.log("Funzioni?");
/* 
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/

//Preparazione:
//Visualizzare in pagina 5 numeri casuali (Math random: 1-100);
const pcNumbersEl = document.querySelector(".pcNumbers");
const userNumbersEl = document.querySelector(".userNumbers");
const timerEl = document.querySelector(".timer");

for (let i = 0; i < 5; i++){
    let randomNumbers = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumbers);
    pcNumbersEl.innerHTML += `<p>${randomNumbers}</p>`;
};

//Far partire timer di 30 secondi;
//Alla fine del timer, far sparire i numeri, e mettere input per inserire 5 numeri dall'user;
let seconds = 3;
let clock = setInterval(countDown, 3000);

function countDown(){
    if (seconds == 0){
        userNumbersEl.classList.remove("guess");
        timerEl.classList.add("guess");
        clearInterval(clock);
    } else {
        timerEl.innerHTML = seconds;
        seconds --;
    }
}


//Confrontare numeri dell'user con quelli random iniziare, e dare valori di risposta.