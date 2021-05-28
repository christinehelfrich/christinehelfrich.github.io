const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.querySelector('#copyright-year').innerText = date;
document.querySelector('#last-modified').innerText = new Date(document.lastModified);


const dayNumber = today.getDay();
const element = document.getElementById("message");

if (dayNumber == 5) {
    element.classList.add("showme");
}

else {
    element.classList.add("hideme");
}
