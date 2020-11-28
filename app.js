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

buttonClose.disabled = true; 

let openInterval;
let closedInterval;

//open

function startOpenTimer() {
    if(closedInterval){
        clearInterval(closedInterval)
    }

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

function startClosedTimer() {
    closedTensCount++
    
    closedClicks.innerHTML = closedClicksCount

   

    if(closedTensCount < 9) {
        closedTens.innerHTML = "0" + closedTensCount
    }

    if(closedTensCount > 9) {
        closedTens.innerHTML = closedTensCount
    }

    if(closedTensCount > 99){
        closedSecondsCount++
        closedSeconds.innerHTML = "0" + closedSecondsCount
        closedTensCount = 0
        closedTens.innerHTML = "0" + 0
    }

    if(closedSecondsCount > 9){
        closedSeconds.innerHTML = closedSecondsCount
    }
}



buttonOpen.addEventListener("click", function() {
    buttonOpen.disabled = true; 
    buttonClose.disabled = false;
    openClicksCount++
    openInterval = setInterval(startOpenTimer)

})

buttonClose.addEventListener("click", function() {
    buttonOpen.disabled = false; 
    buttonClose.disabled = true; 
    clearInterval(openInterval)
    closedClicksCount++
    closedInterval = setInterval(startClosedTimer)
})



buttonReset.addEventListener("click", function() {
    clearInterval(openInterval)
    clearInterval(closedInterval)

    buttonOpen.disabled = false; 
    buttonClose.disabled = true; 

    openSecondsCount = 00
    openTensCount = 00
    openClicksCount = 0
    closedSecondsCount = 00
    closedTensCount = 00
    closedClicksCount = 0

    openSeconds.innerHTML = openSecondsCount
    openTens.innerHTML = openTensCount
    openClicks.innerHTML = openClicksCount
    closedSeconds.innerHTML = closedSecondsCount
    closedTens.innerHTML = closedTensCount
    closedClicks.innerHTML = closedClicksCount

    
})