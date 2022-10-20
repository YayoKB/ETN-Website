const toggleButton = document.getElementById("toggle-btn");
const navbarLinks = document.getElementById("nav-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
