const iconMenu = document.querySelector(".icon-menu");
const menuHTML = document.querySelector(".menu");
const iconMoon = document.querySelector(".icon-moon");
const iconSon = document.querySelector(".icon-son");
const body = document.querySelector("body");
const contentNavbarHTML = document.querySelector(".content-navbar");
const navbarHTML = document.querySelector(".navbar");
const anclasHTML = document.querySelectorAll("ul.menu > li");
console.log(anclasHTML)

//== MENU DESPLEGABLE ===//
iconMenu.addEventListener('click',() => { // escucha el click
    // toggle => si la clase existe la quita, si no existe la crea
    menuHTML.classList.toggle("menu-show") ;

    if (menuHTML.classList.contains("menu-show")) {
        navbarHTML.style.backgroundColor = "transparent";
    } else {
        navbarHTML.style.backgroundColor = "var(--navBar)";
    }
    animationScroll()
}) 

anclasHTML.forEach(anclas => {
    anclas.addEventListener("click",() => {
        menuHTML.classList.toggle("menu-show");
    })
});



//=== MODO NOCHE ===//
iconMoon.addEventListener('click',() => {
    body.classList.toggle("modoNoche");

    iconMoon.style.display = "none";
    iconSon.style.display = "block";
})

iconSon.addEventListener('click',() => {
    body.classList.toggle("modoNoche");

    iconMoon.style.display = "block";
    iconSon.style.display = "none";
})

//==Animacion Scroll===/

function animationScroll() {
    let y = window.scrollY;
    
    if (y > 250) {
        contentNavbarHTML.style.backgroundColor = "var(--navBar)"
        contentNavbarHTML.classList.add("content-navbar--scroll");
        navbarHTML.classList.add("navbar--scroll");
        navbarHTML.style.color = "#e29578"
    } else {
        contentNavbarHTML.classList.remove("content-navbar--scroll");
        navbarHTML.classList.remove("navbar--scroll");
        navbarHTML.style.color = "var(--btn)";
        contentNavbarHTML.style.backgroundColor = "transparent"
    }
}

window.onscroll = () => animationScroll();