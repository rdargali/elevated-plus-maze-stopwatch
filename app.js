const openTens = document.getElementById("open-tens")
const openSeconds = document.getElementById("open-seconds")
const openClicks = document.getElementById("open-clicks")

const closedTens = document.getElementById("closed-tens")
const closedSeconds = document.getElementById("closed-seconds")
const closedClicks = document.getElementById("closed-clicks")

const buttonOpen = document.getElementById("button-open")
const buttonClose = document.getElementById("button-close")
const buttonReset = document.getElementById("button-reset")
const buttonStop = document.getElementById("button-stop")

let openSecondsCount = 00
let openTensCount = 00
let openClicksCount = 0

let closedSecondsCount = 00
let closedTensCount = 00
let closedClicksCount = 0

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

//open button


buttonOpen.addEventListener("click", function() {

    if(openInterval) {
        openClicksCount++
    }else {
        openClicksCount++
        clearInterval(closedInterval)
        closedInterval = null
        openInterval = setInterval(startOpenTimer, 10)
    }
})

document.addEventListener("keydown", function(e){
    if (e.code === "KeyF") {
        buttonOpen.click()
      }
})

//close

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

//close button

buttonClose.addEventListener("click", function() {

    if(closedInterval){
        closedClicksCount++
    } else {
        closedClicksCount++
        clearInterval(openInterval)
        openInterval = null
        closedInterval = setInterval(startClosedTimer,10)
    }
})

document.addEventListener("keydown", function(e){
    if (e.code === "KeyJ") {
        buttonClose.click()
      }
})

//stop button

buttonStop.addEventListener("click", function() {
    clearInterval(openInterval)
    clearInterval(closedInterval)
    openInterval = null
    closedInterval = null
})

document.addEventListener("keydown", function(e){
    if (e.code === "KeyP") {
        buttonStop.click()
      }
})

//reset button

buttonReset.addEventListener("click", function() {
    clearInterval(openInterval)
    clearInterval(closedInterval)

    openInterval = null
    closedInterval = null

    openSecondsCount = 00
    openTensCount = 00
    openClicksCount = 0
    closedSecondsCount = 00
    closedTensCount = 00
    closedClicksCount = 0

    openSeconds.innerHTML = openSecondsCount + "0"
    openTens.innerHTML = openTensCount + "0"
    openClicks.innerHTML = openClicksCount
    closedSeconds.innerHTML = closedSecondsCount + "0"
    closedTens.innerHTML = closedTensCount + "0"
    closedClicks.innerHTML = closedClicksCount

    
})

document.addEventListener("keydown", function(e){
    if (e.code === "KeyR") {
        buttonReset.click()
      }
})
