/* =========================
   SELECT HTML ELEMENTS
========================= */

const membersContainer = document.querySelector("#members");

const gridBtn = document.querySelector("#gridBtn");

const listBtn = document.querySelector("#listBtn");

const menuBtn = document.querySelector("#menuBtn");

const navigation = document.querySelector(".navigation");

/* =========================
   MOBILE MENU
========================= */

menuBtn.addEventListener("click", () => {

    navigation.classList.toggle("open");

});


/* =========================
   FETCH MEMBER DATA
========================= */

async function getMembers() {

    const response = await fetch("data/members.json");

    const data = await response.json();

    displayMembers(data);

}

/* =========================
   DISPLAY MEMBERS
========================= */

function displayMembers(members) {

    members.forEach((member) => {

        const card = document.createElement("section");

        card.innerHTML = `
            <h2>${member.name}</h2>

            <img src="images/${member.image}"
                 alt="${member.name}"
                 loading="lazy">

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p>
                Membership Level:
                ${member.membership}
            </p>
        `;

        membersContainer.appendChild(card);

    });

}

/* =========================
   GRID VIEW
========================= */

gridBtn.addEventListener("click", () => {

    membersContainer.classList.add("grid");

    membersContainer.classList.remove("list");

});

/* =========================
   LIST VIEW
========================= */

listBtn.addEventListener("click", () => {

    membersContainer.classList.add("list");

    membersContainer.classList.remove("grid");

});

/* =========================
   FOOTER DATES
========================= */

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

/* =========================
   START FETCH
========================= */

getMembers();