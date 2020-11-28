let openSecondsCount = 00
let openTensCount = 00
let openClicksCount = 0

let closedSecondsCount = 00
let closedTensCount = 00
let closedClicksCount = 0

const openTens = document.getElementById("open-tens")
const openSeconds = document.getElementById("open-seconds")
const openClicks = document.getElementById("open-clicks")

const closedTens = document.getElementById("closed-tens")
const closedSeconds = document.getElementById("closed-seconds")
const closedClicks = document.getElementById("closed-clicks")

const buttonOpen = document.getElementById("button-open")
const buttonClose = document.getElementById("button-close")
const buttonReset = document.getElementById("button-reset")

let openInterval;
let closedInterval;

//open

function startOpenTimer() {
    openTensCount++
    
    openClicks.innerHTML = openClicksCount

    if(openTensCount < 9) {
        openTens.innerHTML = "0" + openTensCount
    }

    if(openTensCount > 9) {
        openTens.innerHTML = openTensCount
    }

    if(openTensCount > 99){
        openSecondsCount++
        openSeconds.innerHTML = "0" + openSecondsCount
        openTensCount = 0
        openTens.innerHTML = "0" + 0
    }

    if(openSecondsCount > 9){
        openSeconds.innerHTML = openSecondsCount
    }
}



buttonOpen.addEventListener("click", function() {
    openClicksCount++
    openInterval = setInterval(startOpenTimer)

})

buttonClose.addEventListener("click", function() {
    console.log("hello close")
    closedClicksCount++
    clearInterval(openInterval)
})

buttonReset.addEventListener("click", function() {
    console.log("hello")
    clearInterval(startOpenTimer)
    // tens = "00"
    // seconds = "00"
    // appendSeconds.innerHTML = seconds
    // appendTens.innerHTML = tens
})