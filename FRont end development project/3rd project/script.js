const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "Thank you for reaching out!";
  formMessage.style.color = "green";
  contactForm.reset();
});
