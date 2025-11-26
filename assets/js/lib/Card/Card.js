import dealCardContent from "../dealCardContent.js";
import excluCardContent from "../excluCardContent.js";

const dealItem = document.getElementById("dealItem");
const excluItem = document.getElementById("excluItem");

// Compteur panier
const cartCountElement = document.getElementById("cartCount");
let cartCount = 0;

// Fonction générique pour créer les cartes
function createCards(container, cardContent) {
  cardContent.forEach((value) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Génération des étoiles
    let starsHTML = "";
    for (let i = 0; i < 6; i++) {
      starsHTML += `<i class="${
        i < value.rating ? "fa-solid fa-star" : "fa-regular fa-star"
      }"></i>`;
    }

    // Contenu de la carte
    card.innerHTML += `
            <img src="${value.imgSrc}" alt="">
            <h2>${value.text}</h2>
            <div>
                <p>${value.price}</p>
                <p>${value.oldPrice}</p>
                <p>${value.promotion}</p>
            </div>
            <div class="stars">
                ${starsHTML}
            </div>
            <div class="overlay">
            <button class="add-cart-btn">Ajouter au panier</button>
            </div>
        `;

    // Ajout de la carte au conteneur
    container.appendChild(card);

    // Gestion du bouton panier
    const btnAdd = card.querySelector(".add-cart-btn");
    btnAdd.addEventListener("click", () => {
      cartCount++;
      if (cartCountElement) cartCountElement.textContent = cartCount;
    });
  });
}

// Appel de la fonction pour les deux types de cartes
createCards(dealItem, dealCardContent);
createCards(excluItem, excluCardContent);

export { dealItem, excluItem };
