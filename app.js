// Sample data (replace this with your actual data or load from a server)
const uniformData = [
    { firstName: "John", lastName: "Doe", number: 10 },
    { firstName: "Jane", lastName: "Smith", number: 22 },
    // Add more data as needed
];

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
    } else {
        document.getElementById("requestResult").innerText = "Invalid number. Please choose from the available numbers.";
    }
}
