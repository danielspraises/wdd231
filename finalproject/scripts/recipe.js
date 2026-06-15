document.querySelector("#year").textContent =
new Date().getFullYear();




const container = document.querySelector("#featuredRecipes");
const modal = document.querySelector("#recipeModal");
const modalContent = document.querySelector("#modalContent");
const closeBtn = document.querySelector("#closeModalBtn");
const searchInput = document.querySelector("#homeSearch");

const categoryButtons = document.querySelectorAll(".category-pill");

let allRecipes = [];

/* =========================
   LOAD JSON
========================= */
async function loadRecipes() {

    try {
        const response = await fetch("./data/recipes.json");

        if (!response.ok) throw new Error("Failed to load JSON");

        const data = await response.json();

        allRecipes = data;

        displayRecipes(allRecipes);

    } catch (error) {
        console.error(error);
        container.innerHTML = "<p>Recipes failed to load.</p>";
    }
}

/* =========================
   DISPLAY RECIPES
========================= */
function displayRecipes(recipes) {

    container.innerHTML = "";

    if (recipes.length === 0) {
        container.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    recipes.forEach(recipe => {

        const card = document.createElement("div");
        card.classList.add("recipe-card");

        card.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>${recipe.category}</p>
            <p>${recipe.time}</p>
            <button class="view-btn">View Recipe</button>
        `;

        card.querySelector(".view-btn").addEventListener("click", () => {
            openModal(recipe);
        });

        container.appendChild(card);
    });
}

/* =========================
   CATEGORY FILTERING
========================= */
categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        let filteredRecipes;

        if (category === "all") {
            filteredRecipes = allRecipes;
        } else {
            filteredRecipes = allRecipes.filter(recipe =>
                recipe.category === category
            );
        }

        displayRecipes(filteredRecipes);
    });
});

/* =========================
   SEARCH FILTER 
========================= */
searchInput.addEventListener("input", (e) => {

    const value = e.target.value.toLowerCase();

    const filtered = allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(value) ||
        recipe.category.toLowerCase().includes(value)
    );

    displayRecipes(filtered);
});

/* =========================
   MODAL
========================= */
function openModal(recipe) {

    modalContent.innerHTML = `
        <h2>${recipe.name}</h2>
        <p><strong>Category:</strong> ${recipe.category}</p>
        <p><strong>Time:</strong> ${recipe.time}</p>
        <p>${recipe.description}</p>
    `;

    modal.showModal();
}

closeBtn.addEventListener("click", () => modal.close());

/* INIT */
loadRecipes();



/* =========================
   CATEGORY SORT
========================= */

categoryButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Stops the page from reloading

        const category = button.dataset.category;
        
        // Update the URL text without reloading the page
        const newUrl = `${window.location.pathname}?cat=${category}`;
        window.history.pushState({ path: newUrl }, '', newUrl);

        let filteredRecipes;

        if (category === "all" || !category) {
            filteredRecipes = allRecipes;
        } else {
            // Added .toLowerCase() to match URL parsing style safely
            filteredRecipes = allRecipes.filter(recipe =>
                recipe.category.toLowerCase() === category.toLowerCase()
            );
        }

        displayRecipes(filteredRecipes);
    });
});



