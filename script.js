document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector("nav");

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