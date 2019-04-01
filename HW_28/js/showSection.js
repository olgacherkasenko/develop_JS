let tablesLink = document.querySelector(".sidebar__menu");
tablesLink.children[0].addEventListener('click', displayHome);
tablesLink.children[1].addEventListener('click', displayTable);
tablesLink.children[2].addEventListener('click', displayButtons);
tablesLink.children[3].addEventListener('click', displaySlider);
tablesLink.children[4].addEventListener('click', displayDatabase);
tablesLink.children[5].addEventListener('click', displayAutocompete);

function displayHome() {
    document.querySelector("#home").style.display = "block";
    document.querySelector("#tables").style.display = "none";
    document.querySelector("#buttons").style.display = "none";
    document.querySelector("#slider").style.display = "none";
    document.querySelector("#database").style.display = "none";
    document.querySelector("#autocomplete").style.display = "none";
}
function displayTable() {
    document.querySelector("#home").style.display = "none";
    document.querySelector("#tables").style.display = "block";
    document.querySelector("#buttons").style.display = "none";
    document.querySelector("#slider").style.display = "none";
    document.querySelector("#database").style.display = "none";
    document.querySelector("#autocomplete").style.display = "none";
}
function displayButtons() {
    document.querySelector("#home").style.display = "none";
    document.querySelector("#tables").style.display = "none";
    document.querySelector("#buttons").style.display = "block";
    document.querySelector("#slider").style.display = "none";
    document.querySelector("#database").style.display = "none";
    document.querySelector("#autocomplete").style.display = "none";
}
function displaySlider() {
    document.querySelector("#home").style.display = "none";
    document.querySelector("#tables").style.display = "none";
    document.querySelector("#buttons").style.display = "none";
    document.querySelector("#slider").style.display = "block";
    document.querySelector("#database").style.display = "none";
    document.querySelector("#autocomplete").style.display = "none";

}
function displayDatabase() {
    document.querySelector("#home").style.display = "none";
    document.querySelector("#tables").style.display = "none";
    document.querySelector("#buttons").style.display = "none";
    document.querySelector("#slider").style.display = "none";
    document.querySelector("#database").style.display = "block";
    document.querySelector("#autocomplete").style.display = "none";
}
function displayAutocompete() {
    document.querySelector("#home").style.display = "none";
    document.querySelector("#tables").style.display = "none";
    document.querySelector("#buttons").style.display = "none";
    document.querySelector("#slider").style.display = "none";
    document.querySelector("#database").style.display = "none";
    document.querySelector("#autocomplete").style.display = "block";
}
