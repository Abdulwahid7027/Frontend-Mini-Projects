const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

let isDarkMode = false;

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon-fill");
  isDarkMode = !isDarkMode;
  if (!isDarkMode) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});
