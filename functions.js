const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const facilityButtons = document.querySelectorAll(".facility-btn");
const facilityTitle = document.getElementById("facilityTitle");
const facilityDesc = document.getElementById("facilityDesc");
const facilityImage = document.getElementById("facilityImage");

facilityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    facilityButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const title = button.getAttribute("data-title");
    const desc = button.getAttribute("data-desc");
    const image = button.getAttribute("data-image");

    facilityTitle.textContent = title;
    facilityDesc.textContent = desc;

    facilityImage.style.backgroundImage = `
  linear-gradient(135deg, rgba(0, 91, 187, 0.12), rgba(7, 17, 31, 0.18)),
  url("${image}")
`;

    facilityImage.innerHTML = "";
  });
});

const facultyImages = document.querySelectorAll(".faculty-img");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const closeModal = document.getElementById("closeModal");

facultyImages.forEach((image) => {
  image.addEventListener("click", () => {
    modalImage.src = image.src;
    modalName.textContent = image.alt;
    imageModal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  imageModal.classList.remove("active");
});

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    imageModal.classList.remove("active");
  }
});