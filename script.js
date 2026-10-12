
const form = document.getElementById("roomForm");

const windowCount = document.getElementById("windowCount");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");

let windows = 0;
let petFriendly = "No";

// Increase number of windows
increaseBtn.addEventListener("click", () => {
    windows++;
    windowCount.textContent = windows;
});

// Decrease number of windows
decreaseBtn.addEventListener("click", () => {
    if (windows > 0) {
        windows--;
        windowCount.textContent = windows;
    }
});

// Select Yes or No for pets
const petButtons = document.querySelectorAll(".pet-btn");

petButtons.forEach((button) => {
    button.addEventListener("click", () => {
        petButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        petFriendly = button.dataset.pet;
    });
});

// Favorite button
const favoriteBtn = document.getElementById("favoriteBtn");

favoriteBtn.addEventListener("click", () => {
    const icon = favoriteBtn.querySelector("i");

    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");

    favoriteBtn.style.color =
        icon.classList.contains("fa-solid")
            ? "#c84b4b"
            : "#38563f";
});

// Back button
document.getElementById("backBtn").addEventListener("click", () => {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert("You are already on the first page.");
    }
});

// Cart button
document.getElementById("cartBtn").addEventListener("click", () => {
    alert("Your cart is currently empty.");
});

// Next button
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Check required dropdowns
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Collect the room details
    const roomDetails = {
        roomType: document.getElementById("roomType").value,
        lightAvailability: document.getElementById("light").value,
        numberOfWindows: windows,
        windowDirection: document.getElementById("direction").value,
        roomSize: document.getElementById("roomSize").value,
        petFriendly: petFriendly
    };

    console.log("Room Details:", roomDetails);

    alert(
        "Room details saved successfully!\n\n" +
        JSON.stringify(roomDetails, null, 2)
    );

    // You can navigate to the next page here later.
});
