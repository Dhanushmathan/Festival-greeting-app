import { Fireworks } from "fireworks-js";

const container = document.querySelector("#fireworks")
const greeterNameEl = document.querySelector("#greeterName");

const fireworks = new Fireworks(container, {});

fireworks.start();

// Get the search name attributes
const url = new URL(window.location.href)

const name = url.searchParams.get("name");

if (name) {
    // Display that values on UI.
    greeterNameEl.textContent = `👋 ${name} 🥳`;
} else {
    window.location.href = "./index.html";
}
