let menuToggle = document.getElementById("menu-icon");
let navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("border-menu")
    navbar.classList.toggle("open");
});
