//console.log("Funzioni?");
/* 
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/

//Preparazione:
//Visualizzare in pagina 5 numeri casuali (Math random: 1-100);
let pcNumbersEl = document.querySelector(".pc_Numbers");
let userNumbersEl = document.querySelector(".userNumbers");
let timerEl = document.querySelector(".timer");
let resultEl = document.querySelector(".result");


let pcRandomNumbers = [];
for (let i = 0; i < 5; i++) {
    let randomNumbers = Math.floor(Math.random() * 100) + 1;
    pcRandomNumbers.push(randomNumbers);
    console.log(randomNumbers);
    pcNumbersEl.innerHTML += `<p>${randomNumbers}</p>`;
};
console.log(pcRandomNumbers);

//Far partire timer di 30 secondi;
//Alla fine del timer, far sparire i numeri, e mettere input per inserire 5 numeri dall'user;
let seconds = 30;
let clock = setInterval(countDown, 1000);

function countDown() {
    if (seconds == 0) {
        pcNumbersEl.classList.add("guess");
        userNumbersEl.classList.remove("guess");
        timerEl.classList.add("guess");
        clearInterval(clock);
    } else {
        timerEl.innerHTML = ("Ti restano " + seconds + " secondi");
        seconds--;
    }
}

//Confrontare numeri dell'user con quelli random iniziare, e dare valori di risposta.
userNumbersEl.addEventListener("submit", function (e) {
    e.preventDefault();

    let userChoice1 = Number(document.getElementById('number1').value);
    let userChoice2 = Number(document.getElementById('number2').value);
    let userChoice3 = Number(document.getElementById('number3').value);
    let userChoice4 = Number(document.getElementById('number4').value);
    let userChoice5 = Number(document.getElementById('number5').value);

    let count = 0;
    for (let i = 0; i < pcRandomNumbers.length; i++){
        if (pcRandomNumbers[i] == userChoice1){
            count++
        } else if (pcRandomNumbers[i] == userChoice2){
            count++
        } else if (pcRandomNumbers[i] == userChoice3){
            count++
        } else if (pcRandomNumbers[i] == userChoice4){
            count++
        } else if (pcRandomNumbers[i] == userChoice5){
            count++
        }
    }
    console.log(count);
    resultEl.innerHTML = ("Complimenti, hai indovinato " + count + " numeri!");
});
