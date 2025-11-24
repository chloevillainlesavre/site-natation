// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// POPUP SYSTEM
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        document.getElementById("popupTitle").textContent = card.dataset.title;
        document.getElementById("popupText").textContent = card.dataset.text;
        document.getElementById("popupImg").src = card.dataset.img;
        popup.style.display = "flex";
    });
});

closePopup.addEventListener("click", () => popup.style.display = "none");

popup.addEventListener("click", e => {
    if (e.target === popup) popup.style.display = "none";
});
