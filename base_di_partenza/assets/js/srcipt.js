const navBar = document.querySelector(".animated_nav");
const header = document.querySelector("header");
const buttonNav = document.querySelector("nav button");
console.log(navBar);
console.log(navBar.getBoundingClientRect().height);
console.log(header.getBoundingClientRect().height);

window.onscroll = function () {
  navBar.classList.add("white");
  buttonNav.classList.add("green");
};
