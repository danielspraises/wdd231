/* =========================
   MOBILE NAVIGATION (HAMBURGER MENU)
========================= */

const menuBtn = document.querySelector("#menuBtn");
const navigation = document.querySelector(".navigation");

/* Toggle menu open/close */
if (menuBtn && navigation) {
    menuBtn.addEventListener("click", () => {
        navigation.classList.toggle("open");

        /* Optional accessibility improvement */
        const expanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", !expanded);
    });
}

/* =========================
   WAYFINDING (ACTIVE LINK)
========================= */

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});