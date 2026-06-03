/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector("#menuBtn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

/* =========================
   FOOTER DATES
========================= */

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

/* =========================
   TIMESTAMP
========================= */

document.querySelector("#timestamp").value =
    new Date().toISOString();

/* =========================
   OPEN MODALS
========================= */

const modalLinks =
    document.querySelectorAll(".open-modal");

modalLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const modalId =
            link.dataset.modal;

        document
            .querySelector(`#${modalId}`)
            .showModal();

    });

});

/* =========================
   CLOSE MODALS
========================= */

const closeButtons =
    document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.closest("dialog").close();

    });

});
