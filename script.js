//Menu hamburguer//
const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");
const menuBtnicon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnicon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnicon.setAttribute("class", "ri-menu-line");
});

//Animações - home//
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  dutarion: 1000,
};

ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header_btns", {
  ...scrollRevealOption,
  delay: 1500,
});
//Animações - Sobre-Nos//

ScrollReveal().reveal(".destination_card", {
  ...scrollRevealOption,
  interval: 500,
});

//Animações - Pacotes//

ScrollReveal().reveal(".showcase_image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase_content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase_content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase_btn", {
  ...scrollRevealOption,
  delay: 1500,
});
//Animações - Banner//
ScrollReveal().reveal(".banner_card", {
  ...scrollRevealOption,
  interval: 500,
});
