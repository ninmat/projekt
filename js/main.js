"use strict"
// Hamburgarmeny: kod från Malin KÄLLA 
// Hämta in meny-knapparna
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");


//eventlyssnare
openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);


//Toggla fram navigeringsmenyn
function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu");

    //hämtar in css för menyn
    let style = window.getComputedStyle(navMenuEl);

    //koll om navigering är synlig eller ej, ändrar display block/none
    if(style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}


//Gör att ett produkt-kort är klickbart med JQuery. Källa: https://codepen.io/spotzermedia/pen/EvJvvB

$(".product-card").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});