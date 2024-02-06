const fs = require('fs');
const path = require('path');

// Path to the JSON files
const databasePath = path.resolve(__dirname, 'database.json');
const availableNumbersPath = path.resolve(__dirname, 'availableNumbers.json');

// Load data from the JSON files
let uniformData = [];
let availableNumbers = [];

try {
    const data = fs.readFileSync(databasePath, 'utf-8');
    uniformData = JSON.parse(data);
} catch (err) {
    console.error('Error reading or parsing the database file:', err);
}

try {
    const numbersData = fs.readFileSync(availableNumbersPath, 'utf-8');
    availableNumbers = JSON.parse(numbersData);
} catch (err) {
    console.error('Error reading or parsing the availableNumbers file:', err);
}

function queryUniformNumber() {
    // ... (previous code remains unchanged)
}

function getAvailableNumbers() {
    document.getElementById("availableNumbers").innerText = `Available Numbers: ${availableNumbers.join(', ')}`;
}

function submitRequest() {
    const requestedNumber = parseInt(document.getElementById("requestedNumber").value);

    if (availableNumbers.includes(requestedNumber)) {
        // ... (previous code remains unchanged)

        // Save data to the JSON files
        saveDataToFile();
        saveAvailableNumbersToFile();
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

function saveAvailableNumbersToFile() {
    try {
        const numbersData = JSON.stringify(availableNumbers, null, 2);
        fs.writeFileSync(availableNumbersPath, numbersData, 'utf-8');
        console.log('Available numbers saved to file.');
    } catch (err) {
        console.error('Error writing available numbers to file:', err);
    }
}
