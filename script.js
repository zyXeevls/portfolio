// Scroll Reveal Animation
const scrollReveal = document.querySelectorAll(".scroll-reveal");

const revealOnScroll = () => {
  scrollReveal.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.5) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Generate kunang-kunang secara acak
const hero = document.querySelector(".hero");
const numberOfFireflies = 15;

for (let i = 0; i < numberOfFireflies; i++) {
  const firefly = document.createElement("div");
  firefly.className = "firefly";

  // Posisi acak
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  firefly.style.left = x + "%";
  firefly.style.top = y + "%";

  // Animasi berbeda-beda
  firefly.style.animationDuration = Math.random() * 5 + 3 + "s";
  firefly.style.animationDelay = Math.random() * 5 + "s";

  hero.appendChild(firefly);
}

//navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// when we click on hamburger icon its close

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
