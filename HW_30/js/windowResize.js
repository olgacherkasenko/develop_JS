let timerID;
let parentElement = document.getElementById("footer");
let sizeDiv = document.createElement("div");
let widthSpan = document.createElement("span");
let heightSpan = document.createElement("span");

sizeDiv.className = "footer__size_div";
widthSpan.innerHTML = document.documentElement.clientWidth + " x ";
heightSpan.innerHTML = document.documentElement.clientHeight;

sizeDiv.appendChild(widthSpan);
sizeDiv.appendChild(heightSpan);
parentElement.appendChild(sizeDiv);

window.addEventListener('resize', function getSizeOfWindow() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    clearTimeout(timerID);
    timerID = setTimeout (function() {
        widthSpan.innerHTML = width + " x ";
        heightSpan.innerHTML = height;
    }, 2000);
});
