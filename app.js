const fs = require('fs');
const path = require('path');

// Path to the JSON file
const databasePath = path.resolve(__dirname, 'database.json');

// Load data from the JSON file
let uniformData = [];
try {
    const data = fs.readFileSync(databasePath, 'utf-8');
    uniformData = JSON.parse(data);
} catch (err) {
    console.error('Error reading or parsing the database file:', err);
}

let availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with your actual available numbers

function queryUniformNumber() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    const player = uniformData.find(player => player.firstName === firstName && player.lastName === lastName);

    if (player) {
        document.getElementById("queryResult").innerText = `Player ${firstName} ${lastName} has the number ${player.number}.`;
    } else {
        document.getElementById("queryResult").innerText = "Player not found.";
    }
}

function getAvailableNumbers() {
    document.getElementById("availableNumbers").innerText = `Available Numbers: ${availableNumbers.join(', ')}`;
}

function submitRequest() {
    const requestedNumber = parseInt(document.getElementById("requestedNumber").value);

    if (availableNumbers.includes(requestedNumber)) {
        // Remove the requested number from availableNumbers
        availableNumbers = availableNumbers.filter(num => num !== requestedNumber);

        // Add the player to the uniformData
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        uniformData.push({ firstName, lastName, number: requestedNumber });

        document.getElementById("requestResult").innerText = `Request successful! ${firstName} ${lastName} has been assigned the number ${requestedNumber}.`;

        // Save data to the JSON file
        saveDataToFile();
    } else {
        document.getElementById("requestResult").innerText = "Invalid number. Please choose from the available numbers.";
    }
}

function saveDataToFile() {
    try {
        const jsonData = JSON.stringify(uniformData, null, 2);
        fs.writeFileSync(databasePath, jsonData, 'utf-8');
        console.log('Data saved to database file.');
    } catch (err) {
        console.error('Error writing to the database file:', err);
    }
}
