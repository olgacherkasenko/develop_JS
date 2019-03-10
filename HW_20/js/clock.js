let parentElemFooter = document.getElementById("footer");
let parentElemHeader = document.getElementById("header");

let clockDiv = document.createElement("div");
let nodesOfClock = [];
for( let i = 0; i < 5; i++){
    nodesOfClock[i] = document.createElement("span");
}

let dateDiv = document.createElement("div");
let nodesOfDate = [];
for( let i = 0; i < 4; i++){
    nodesOfDate[i] = document.createElement("span");
}
clockDiv.className = "header__clock_div";
nodesOfClock[0].innerHTML = getCurrentHours();
nodesOfClock[1].innerHTML = ':';
nodesOfClock[2].innerHTML = getCurrentMinutes();
nodesOfClock[3].innerHTML = ':';
nodesOfClock[4].innerHTML = getCurrentSeconds();

dateDiv.className = "footer__date_div";
nodesOfDate[0].innerHTML  = getNameOfDay() + ', ';
nodesOfDate[1].innerHTML = getCurrentDay() + ".";
nodesOfDate[2].innerHTML = getCurrentMonth() + ".";
nodesOfDate[3].innerHTML = getCurrentYear();

for( let i = 0; i < nodesOfClock.length; i++) {
    clockDiv.appendChild(nodesOfClock[i]);
}
for( let i = 0; i < nodesOfDate.length; i++) {
    dateDiv.appendChild(nodesOfDate[i]);
}
parentElemHeader.appendChild(clockDiv);
parentElemFooter.appendChild(dateDiv);

function checkCurrentData(someDate) {
    return (someDate < 10) ? ('0' + someDate) : someDate;
}
function getCurrentHours() {
    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    return checkCurrentData(currentHours);
}
function getCurrentMinutes() {
    let currentDate = new Date();
    let currentMinutes = currentDate.getMinutes();
    return checkCurrentData(currentMinutes) ;
}
function getCurrentSeconds() {
    let currentDate = new Date();
    let currentSeconds = currentDate.getSeconds();
    return checkCurrentData(currentSeconds);
}
function getCurrentDay() {
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    return checkCurrentData(currentDay);
}
function getCurrentMonth() {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;
    return checkCurrentData(currentMonth) ;
}
function getCurrentYear() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return checkCurrentData(currentYear);
}
function getNameOfDay() {
    let currentDate = new Date();
    let nameOfDay = currentDate.getDay();
    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    return days[nameOfDay];
}
function checkClockTime(nameOfSpan, valueTime){
    if (nameOfSpan.textContent !== valueTime.toString()) {
        nameOfSpan.innerHTML = valueTime;
    }
}
setInterval(() => {
    console.log(nodesOfClock[0].textContent);
    console.log(getCurrentHours());
    checkClockTime(nodesOfClock[0], getCurrentHours());
    checkClockTime(nodesOfClock[2], getCurrentMinutes());
    checkClockTime(nodesOfClock[4], getCurrentSeconds());

}, 1000);

