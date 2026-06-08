// console log to know that js file is loading
console.log("Discover page JS loaded!");


import { discoverItems } from "../data/discover.mjs";

/* =========================
   MENU
========================= */

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

/* =========================
   RENDER CARDS
========================= */

const grid = document.querySelector("#discoverGrid");

discoverItems.forEach(item => {

    const card = document.createElement("article");

    card.classList.add("discover-card");

    card.innerHTML = `
        <h2>${item.name}</h2>

        <figure>
            <img src="images/${item.image}"
                 alt="${item.name}"
                 loading="lazy">
        </figure>

        <address>${item.address}</address>

        <p>${item.description}</p>

        <button>Learn More</button>
    `;

    grid.appendChild(card);
});

/* =========================
   VISIT MESSAGE (localStorage)
========================= */

const visitMessage = document.querySelector("#visitMessage");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const diffDays =
        Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else if (diffDays === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitMessage.textContent =
            `You last visited ${diffDays} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);



/* =========================
   FOOTER DATES
========================= */

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;