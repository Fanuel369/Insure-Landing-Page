var hamburger = document.querySelector("#hamburger"); //HAMBURGER ICON

hamburger.addEventListener("click", function () {
    var nav_links = document.querySelector(".nav_links"); //NAV-LIKK

    nav_links.classList.toggle("nav_active"); //TOGGLE CLASS

    var att = hamburger.getAttribute("src")
    if (att === "images/icon-hamburger.svg") {
        hamburger.setAttribute("src", "images/icon-close.svg")
    } else if (att === "images/icon-close.svg") {
        hamburger.setAttribute("src", "images/icon-hamburger.svg")
    }
})