// Hamburger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// footer date 
const year = document.querySelector(".current-year")
year.innerHTML = new Date().getFullYear();