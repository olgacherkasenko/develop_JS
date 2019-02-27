let parentElemFooter = document.getElementById("footer");
let parentElemHeader = document.getElementById("header");

let clockDiv = document.createElement("div");
let hoursSpan = document.createElement("span");
let minutesSpan = document.createElement("span");
let secondsSpan = document.createElement("span");

let dateDiv = document.createElement("div");
let daySpan = document.createElement("span");
let monthSpan = document.createElement("span");
let yearSpan = document.createElement("span");
let dayNameSpan = document.createElement("span");

clockDiv.className = "header__clock_div";
hoursSpan.innerHTML = getCurrentHours() + ":";
minutesSpan.innerHTML = getCurrentMinutes() + ":";
secondsSpan.innerHTML = getCurrentSeconds();

dateDiv.className = "footer__date_div";
dayNameSpan.innerHTML  = getNameOfDay() + ', ';
daySpan.innerHTML = getCurrentDay() + ".";
monthSpan.innerHTML = getCurrentMonth() + ".";
yearSpan.innerHTML = getCurrentYear();

clockDiv.appendChild(hoursSpan);
clockDiv.appendChild(minutesSpan);
clockDiv.appendChild(secondsSpan);

dateDiv.appendChild(dayNameSpan);
dateDiv.appendChild(daySpan);
dateDiv.appendChild(monthSpan);
dateDiv.appendChild(yearSpan);

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
    let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    return days[nameOfDay - 1];
}
setInterval(() => {
    if (hoursSpan.textContent != getCurrentHours() + ":") {
        hoursSpan.innerHTML = getCurrentHours() + ":";
    }
    if (minutesSpan.textContent != getCurrentMinutes() + ":") {
        console.log(minutesSpan.textContent);
        console.log(getCurrentMinutes() + ":");
        minutesSpan.innerHTML = getCurrentMinutes() + ":";
    }
    if (secondsSpan.textContent != getCurrentSeconds()) {
        secondsSpan.innerHTML = getCurrentSeconds();
    }
}, 1000);
