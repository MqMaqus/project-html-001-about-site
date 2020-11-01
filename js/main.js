window.onscroll = function () {
  navScroll();
};

const header = document.getElementById("header");
const sticky = header.offsetTop;

function navScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav")[0];
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
})
