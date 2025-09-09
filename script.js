// ===== Image Slider =====
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
  index = (index + 1) % slides.length;
}

setInterval(showSlides, 3000);

// ===== Form Validation =====
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill in all fields.";
    } else {
      formMessage.style.color = "green";
      formMessage.textContent = "Message sent successfully!";
      this.reset();
    }
  });
}

// ===== Hamburger Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});