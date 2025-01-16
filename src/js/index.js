const { response } = require("express");

async function updateName() {
    const nameElement = document.querySelector('.name');
    const response = await fetch('http://localhost:3000');
    if (response.ok) {
        const name = await response.text(); // Shelby Rudy
        nameElement.textContent = name;
    }
    else {
        nameElement.textContent = 'Error retrieving name';
    }
}

updateName(); 