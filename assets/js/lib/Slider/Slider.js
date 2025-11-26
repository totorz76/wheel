const hero = document.getElementById("hero");

const images = [
    "./assets/img/slider-1-1.webp",
    "./assets/img/slider-1-2.webp",
    "./assets/img/slider-1-3.webp",
];
// je set une première image pour avoir un effet de transition entre la première et la deuxième
let index = 0;
hero.style.backgroundImage = `url(${images[index]})`;
index = 1;
setInterval(() => {
    hero.style.transition = "all 1s ease-in-out";
    hero.style.backgroundImage = `url(${images[index]})`;
    // ensuite j'ajoute 1 à l'index tout en prenant en compte le nombre d'images pour pas dépasser dans le tableau
    index = (index + 1) % images.length;
    setTimeout(() => {
        hero.style.transition = "";
    }, 3000);
}, 6000);

export { hero };
