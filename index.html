let currentImages = [];
let currentIndex = 0;

const cards = document.querySelectorAll(".card, .card.nage");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

cards.forEach(card => {
    card.addEventListener("click", () => {
        currentImages = JSON.parse(card.getAttribute("data-images"));
        currentIndex = 0;
        popupImg.src = currentImages[currentIndex];
        popupTitle.textContent = card.getAttribute("data-title");
        popupText.textContent = card.getAttribute("data-text");
        popup.style.display = "flex";
        updateCarouselButtons();
    });
});

closePopup.addEventListener("click", () => { popup.style.display = "none"; });
window.addEventListener("click", (e) => { if(e.target === popup) popup.style.display = "none"; });

function updateCarouselButtons() {
    prevBtn.style.display = currentImages.length > 1 ? "block" : "none";
    nextBtn.style.display = currentImages.length > 1 ? "block" : "none";
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    popupImg.src = currentImages[currentIndex];
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    popupImg.src = currentImages[currentIndex];
});

// Fade-in animations
const revealElements = document.querySelectorAll(".section, .card, .bubble, .block-text-img");
function revealOnScroll() {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 80) el.classList.add("visible");
    });
}
revealOnScroll();
window.addEventListener("scroll", revealOnScroll);
