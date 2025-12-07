// Force scroll to top on page load/refresh
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// Highlight nav pills on scroll and smooth scroll between sections

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-pill");

// Scroll spy
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const offset = section.offsetTop - 140;
    if (window.scrollY >= offset) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Smooth scroll for nav links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  });
});
