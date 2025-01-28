document.getElementById('generateBtn').addEventListener('click', generatePlate);

function generatePlate() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const cities = ['BOGOTA', 'LONDON', 'BERLIN', 'MADRID', 'MOSCOW', 'DUBLIN', 'OTTAWA'];

    // Generate first part
    let firstPart = '';
    for (let i = 0; i < 3; i++) {
        firstPart += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 3; i++) {
        firstPart += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Generate second part
    let randomLetters = '';
    for (let i = 0; i < 6; i++) {
        randomLetters += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const secondPart = randomLetters + randomCity + '-';

    // Update display
    document.getElementById('plate').textContent = `${firstPart} ${secondPart}`;
}
