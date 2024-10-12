const timeDiv = document.getElementById("time-div");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let intervalId;



const timer = () => {
    if(intervalId !== null){
        clearInterval(intervalId)
    }
    intervalId = setInterval(startFunction,1);
}

const startFunction = () => {
    miliseconds += 1
    if(miliseconds == 100){
        miliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0"+ hours : hours;
    let m = minutes < 10 ? "0"+ minutes : minutes;
    let s = seconds < 10 ? "0"+ seconds : seconds;
    let ms = miliseconds < 10 ? "0"+ miliseconds : miliseconds;

    timeDiv.innerHTML = `${h} : ${m} : ${s} : ${ms}`

}
const resetFunction = () =>{
    clearInterval(intervalId)
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    timeDiv.innerHTML = "00 : 00 : 00 : 00"

}
startBtn.addEventListener("click", timer)

pauseBtn.addEventListener("click",() =>{
    clearInterval(intervalId);
})

resetBtn.addEventListener("click",resetFunction);
