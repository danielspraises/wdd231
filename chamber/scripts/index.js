/* =========================
   MENU TOGGLE
========================= */

const menuBtn = document.querySelector("#menuBtn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
});




/* =========================
   WEATHER API
========================= */

const apiKey = "2d738cb468da65bf9222afb7842795a2";

const url =
`https://api.openweathermap.org/data/2.5/forecast?q=Lagos&units=metric&appid=${apiKey}`;

async function getWeather() {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather request failed");
        }

        const data = await response.json();

        displayWeather(data);

    }

    catch(error) {

        console.error(error);

        document.querySelector(".weather-card").innerHTML = `
            <h2>Weather</h2>
            <p>Weather data unavailable.</p>
        `;
    }
}

function displayWeather(data) {

    if (!data.list) return;

    document.querySelector("#current-temp").innerHTML =
    `${Math.round(data.list[0].main.temp)}°C`;

    document.querySelector("#weather-desc").innerHTML =
    data.list[0].weather[0].description;

    document.querySelector("#forecast").innerHTML = `
        <p>Tomorrow: ${Math.round(data.list[8].main.temp)}°C</p>

        <p>Day 2: ${Math.round(data.list[16].main.temp)}°C</p>

        <p>Day 3: ${Math.round(data.list[24].main.temp)}°C</p>
    `;
}

getWeather();





/* =========================
   SPOTLIGHTS
========================= */

async function getSpotlights() {

    const response =
    await fetch("data/members.json");

    const data =
    await response.json();

    displaySpotlights(data);

}

function displaySpotlights(members) {

    const spotlightContainer =
    document.querySelector("#spotlights");

    /* Filter Gold & Silver */

    const qualifiedMembers =
    members.filter(member =>
        member.membership >= 2
    );

    /* Shuffle */

    qualifiedMembers.sort(() =>
        0.5 - Math.random()
    );

    /* Select 3 */

    const selected =
    qualifiedMembers.slice(0, 3);

    /* Display */

    selected.forEach(member => {

        const card =
        document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="images/${member.image}"
                 alt="${member.name}">

            <p>${member.phone}</p>

            <p>${member.address}</p>

            <a href="${member.website}"
               target="_blank">
               Visit Website
            </a>

            <p>
                Membership Level:
                ${member.membership}
            </p>
        `;

        spotlightContainer.appendChild(card);

    });

}

getSpotlights();


/* =========================
   FOOTER DATES
========================= */

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;
