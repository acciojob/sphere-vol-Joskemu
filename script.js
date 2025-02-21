// Function to calculate the volume of a sphere
function calculateVolume(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the radius input value
    const radius = document.getElementById("radius").value;

    // Check if the radius is a valid number
    if (radius && !isNaN(radius) && radius > 0) {
        // Calculate the volume using the formula: V = (4/3) * π * r^3
        const volume = (4/3) * Math.PI * Math.pow(parseFloat(radius), 3);

        // Display the volume in the volume input field
        document.getElementById("volume").value = volume.toFixed(2);
    } else {
        // If the input is not valid, clear the volume input field and alert the user
        document.getElementById("volume").value = '';
        alert("Please enter a valid positive radius.");
    }
}

// Add event listener to handle form submission
document.getElementById("MyForm").addEventListener("submit", calculateVolume);
