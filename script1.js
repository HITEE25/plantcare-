
const message = document.getElementById("message");
const plantImage = document.getElementById("plantImage");

function showMessage(text) {
    message.textContent = text;
}

// Plant categories
document.querySelectorAll(".category").forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelectorAll(".category").forEach(function (item) {
            item.classList.remove("selected");
        });

        button.classList.add("selected");

        showMessage("Selected category: " + button.dataset.category);
    });
});

// Select a plant image
document.getElementById("identifyBtn").addEventListener("click", function () {
    plantImage.click();
});

plantImage.addEventListener("change", function () {
    if (plantImage.files && plantImage.files.length > 0) {
        showMessage(
            "Image selected: " + plantImage.files[0].name +
            ". Connect a plant identification API to identify this plant."
        );
    }
});

// Plant placement
document.getElementById("positionBtn").addEventListener("click", function () {
    showMessage(
        "Consider sunlight, temperature, and humidity when choosing a spot for your plant."
    );
});

// Store
document.getElementById("shopBtn").addEventListener("click", function () {
    showMessage("Plant Store selected. Connect your store page to continue.");
});

// Search
document.getElementById("searchBtn").addEventListener("click", function () {
    const query = prompt("Enter a plant name:");

    if (query && query.trim()) {
        showMessage("Search requested for: " + query.trim());
    }
});

// Filters
document.getElementById("filterBtn").addEventListener("click", function () {
    showMessage("Choose Indoor, Low Light, or Pet Friendly to explore categories.");
});

// Favourites
document.getElementById("topFav").addEventListener("click", function () {
    showMessage("Your saved plants will appear here when favourites are connected.");
});

// Cart
document.getElementById("cartBtn").addEventListener("click", function () {
    showMessage("Your cart is ready to be connected to the plant store.");
});

// Bottom navigation
document.querySelectorAll(".nav-item").forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelectorAll(".nav-item").forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const page = button.dataset.page;

        if (page === "Home") {
            showMessage("Welcome to PlantCare!");
        } else {
            showMessage(
                page + " selected. Connect this button to the " + page + " page."
            );
        }
    });
});

// Back
document.getElementById("backBtn").addEventListener("click", function () {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        showMessage("You are on the home page.");
    }
});
