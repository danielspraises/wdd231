document.addEventListener("DOMContentLoaded", function () {
	const currentYear = document.querySelector("#currentyear");
	// const lastModified = document.querySelector("#lastModified");

	const today = new Date();
	// const modifiedDate = new Date(document.lastModified);

	if (currentYear) {
		currentYear.textContent = today.getFullYear();
	}

    document.getElementById("lastModified").innerHTML = document.lastModified;

});

