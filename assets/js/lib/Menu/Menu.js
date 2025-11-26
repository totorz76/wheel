import menuContent from "../menuContent.js";

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  if (menu.classList.contains("close")) {
    menu.classList.remove("close");
    menu.classList.add("open");
  } else {
    menu.classList.remove("open");
    menu.classList.add("close");
  }
});

menuContent.forEach((value) => {

  const menuItem = document.createElement("li");
  menuItem.classList.add("menuitem");
  menuItem.innerHTML = `
    <div>
        <img src="${value.imgSrc}" alt="">
    </div>
    <p>${value.text}</p>
    `;
  menu.appendChild(menuItem);
  menuItem.addEventListener("click", () => {
     document.querySelectorAll(".submenu").forEach(ul => ul.remove());
    const subMenuList = document.createElement("ul");
    subMenuList.classList.add("submenu");
    menuItem.appendChild(subMenuList);
     value.subMenu.forEach((sub) => {
            const subMenuItem = document.createElement("li");
            subMenuItem.textContent = sub.text;
            subMenuList.appendChild(subMenuItem);
        });
  })
});

export default burger;
