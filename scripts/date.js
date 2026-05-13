const currentYear = document.querySelector("#currentyear");

currentYear.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;