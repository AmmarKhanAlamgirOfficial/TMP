document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  // Optional: Close the menu when clicking outside or on a menu link
  document.addEventListener("click", (e) => {
    const isClickInside = hamburger.contains(e.target) || mobileNav.contains(e.target);
    if (!isClickInside) {
      mobileNav.classList.remove("open");
    }
  });

  // Optional: Close when selecting a link
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mobileNav.classList.remove("open"));
  });
});

document.querySelectorAll(".bottom-tabs .tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".bottom-tabs .tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

