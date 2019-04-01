let myButton = document.getElementById('buttons');
myButton.addEventListener('click', changeColor);

function changeColor(event) {
    if(event.target.style.backgroundColor === event.target.value) {
        event.target.style.backgroundColor = "#D2BBFB";
    } else {
        event.target.style.backgroundColor = event.target.value;
    }
}

