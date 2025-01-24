document.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.scrollY;
  const navbar = document.querySelector("nav");
  const navList = document.querySelector(".nav-list");
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.textContent = "☰";

  navbar.appendChild(menuToggle);
  menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }

    if (window.scrollY > 50) {
      navbar.classList.add("transparent");
    } else {
      navbar.classList.remove("transparent");
    }

    lastScrollY = window.scrollY;
  });
});