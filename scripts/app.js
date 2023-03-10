// Menu-toggle
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function() {
  menu.classList.add(activeClass);
});

// Click outside content
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    // Clicked in box
    menu.classList.remove(activeClass);
  }
});