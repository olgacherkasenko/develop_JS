let totalTime = 0;
let timerId = setInterval(timer, 1000);
let footerElement = document.getElementById("footer");

let timerDiv = document.createElement("div");
let nodesOfTimer = [];
for( let i = 0; i < 5; i++){
    nodesOfTimer[i] = document.createElement("span");
}
timerDiv.className = "footer__timer_div";
nodesOfTimer[1].innerHTML = ":";
nodesOfTimer[3].innerHTML = ":";
for (let i = 0; i < 5; i += 2) {
    nodesOfTimer[i].innerHTML  = "00";
}
for( let i = 0; i < nodesOfTimer.length; i++) {
    timerDiv.appendChild(nodesOfTimer[i]);
}
footerElement.appendChild(timerDiv);

function checkTime(time) {
    return (time < 10) ? ('0' + time) : time;
}
function checkTimerTime(timerSpan, valueTime) {
        if (timerSpan.textContent !== checkTime(valueTime)) {
            timerSpan.innerHTML = checkTime(valueTime);
        }
}
function timer(){
    totalTime++;
    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor((totalTime - hours * 3600) / 60);
    let seconds = totalTime - (hours * 3600 + minutes * 60);
    checkTimerTime(nodesOfTimer[0], hours);
    checkTimerTime(nodesOfTimer[2], minutes);
    checkTimerTime(nodesOfTimer[4], seconds);
}
function resetTimer(event) {
    if (event.key === "Escape") {
        nodesOfTimer[0].innerHTML = "00";
        nodesOfTimer[2].innerHTML = "00";
        nodesOfTimer[4].innerHTML = "00";
        totalTime = 0;
    }
}
function pauseTime() {
    clearInterval(timerId);
}
function resume () {
    timerId = setInterval(timer, 1000);
}
document.addEventListener('keydown', resetTimer);
timerDiv.addEventListener("mouseover", pauseTime );
timerDiv.addEventListener("mouseout", resume);




