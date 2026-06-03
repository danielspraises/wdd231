/* =========================
   MOBILE MENU
========================= */

const menuBtn =
document.querySelector("#menuBtn");

const navigation =
document.querySelector(".navigation");

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
   DISPLAY FORM DATA
========================= */

const params =
new URLSearchParams(window.location.search);

const firstName =
params.get("firstName");

const lastName =
params.get("lastName");

const email =
params.get("email");

const phone =
params.get("phone");

const organization =
params.get("organization");

const timestamp =
params.get("timestamp");

document.querySelector("#submissionDetails").innerHTML = `

<p>
    <strong>First Name:</strong>
    ${firstName}
</p>

<p>
    <strong>Last Name:</strong>
    ${lastName}
</p>

<p>
    <strong>Email Address:</strong>
    ${email}
</p>

<p>
    <strong>Mobile Phone:</strong>
    ${phone}
</p>

<p>
    <strong>Organization:</strong>
    ${organization}
</p>

<p>
    <strong>Application Date:</strong>
    ${timestamp}
</p>

`;