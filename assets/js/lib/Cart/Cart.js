const cards = document.getElementsByClassName("card");

Array.from(cards).forEach(card => {
    const overlay = card.querySelector(".overlay");

    card.addEventListener("mouseover", () => {
        overlay.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
        overlay.classList.remove("active");
    });
});




export default cards;