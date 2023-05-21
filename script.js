// Grab DOM elements 
const spanYear = document.querySelector("#current-year");

function setCurrentYear () {
    let currentYear = new Date().getFullYear();
    spanYear.textContent = currentYear;

}



setCurrentYear();




