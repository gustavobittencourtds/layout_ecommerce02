//header sticky
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});


//responsive nav
const burger = document.querySelector(".burger");
const navBar = document.querySelector(".nav-bar");
const navLinks = document.querySelectorAll(".nav-bar li");
let show = true;

burger.addEventListener("click", () => {

  document.body.style.overflowY = show ? "hidden" : "initial";

  navBar.classList.toggle("nav-open");
  burger.classList.toggle("burger-rotate");
  header.classList.toggle("bg-color");

  //animate links
  navLinks.forEach((link, indice) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${indice / 7 + 0.3}s`
    }
  });

  show = !show;

});

//search
const searchBar = document.querySelector(".search-bar");
const searchIcon = document.getElementById("search-icon");

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("hide");
})

