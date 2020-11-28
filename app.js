let seconds = 00
let tens = 00

const appendTens = document.getElementById("tens")
const appendSeconds = document.getElementById("seconds")

const buttonOpen = document.getElementById("button-open")
const buttonClose = document.getElementById("button-close")
const buttonReset = document.getElementById("button-Reset")

let interval;

//open

function startOpenTimer() {
    tens++

    if(tens < 9) {
        appendTens.innerHTML = "0" + tens
    }

    if(tens > 9) {
        appendTens.innerHTML = tens
    }

    if(tens > 99){
        seconds++
        appendSeconds.innerHTML = "0" + seconds
        tens = 0
        appendTens.innerHTML = "0" + 0
    }

    if(seconds > 9){
        appendSeconds.innerHTML = seconds
    }
}

buttonOpen.addEventListener("click", function() {
   
    interval = setInterval(startOpenTimer)

})