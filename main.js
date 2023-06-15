// Hamburger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Search-box 
function openSearch(){
    document.getElementById("navOverlay").style.display = "block";
}
function closeSearch(){
    document.getElementById("navOverlay").style.display = "none";
};

const preloader = document.getElementById("loader");
function myfunction(){
    preloader.style.display = 'none';

}