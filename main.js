const toggleButton = document.getElementById(“toggle”);
const nav = document.getElementById(“menu”);

toggleButton.addEventListener(“click”, () => {
  nav.classList.toggle(“show”);
});