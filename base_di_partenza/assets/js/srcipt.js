const navBar = document.querySelector(".animated_nav");
const header = document.getElementById("header");
const buttonNav = document.querySelector("nav button");
console.log(navBar);
console.log(header.offsetHeight);
const height2 = header.offsetHeight;
console.log(height2);

window.onscroll = function () {
  let height1 = window.scrollY;
  if (height1 >= height2) {
    navBar.classList.add("white");
    buttonNav.classList.add("green");
  } else {
    navBar.classList.remove("white");
    buttonNav.classList.remove("green");
  }
};
