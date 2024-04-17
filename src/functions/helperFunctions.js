// Function to convert Celsius to Fahrenheit
export function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert knots to MPH
export function knotsToMPH(knots) {
    return knots * 1.15078;
}

// Function that gets wind direction in degrees and converts it to cardinal direction
export function getWindDirection(degrees) {
    const directions = [
        "N", "NNE", "NE", "ENE",
        "E", "ESE", "SE", "SSE",
        "S", "SSW", "SW", "WSW",
        "W", "WNW", "NW", "NNW"
    ];
    const index = Math.floor((degrees + 11.25) / 22.5) % 16;
    return directions[index];
}

// Convert the cloud coverage code to a readable sentence
export function getCloudCoverageDescription(code) {
    const cloudCoverageCodes = {
        FEW: "There are a Few Clouds",
        SCT: "The Clouds are Scattered",
        BKN: "It is a Broken Sky",
        OVC: "Clouds are Overcast",
        CLR: "Clear Skies",
        NSC: "No Significant Cloud"
    };
  
    const normalizedCode = code.toUpperCase();
  
    return cloudCoverageCodes[normalizedCode] || "Unknown";
}

// Calculate offset between two points in time returned in hrs:min
export function calculateTimeOffset(startDate, eventDate) {
    const start = new Date(startDate);
    const event = new Date(eventDate);
    const diff = event - start;

    const totalMinutes = Math.floor(diff / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
}