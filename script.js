const plate = document.getElementById('licensePlate');
const states = [
    { name: 'CALIFORNIA', class: 'california', format: 'number' },
    { name: 'TEXAS', class: 'texas', format: 'dash' },
    { name: 'NEW YORK', class: 'new-york', format: 'space' },
    { name: 'FLORIDA', class: 'florida', format: 'custom' }
];

let currentStateIndex = 0;

function generatePlate() {
    const state = states[currentStateIndex];
    plate.className = `license-plate ${state.class}`;
    
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    
    let plateNumber = '';
    switch(state.format) {
        case 'number':
            // California format: 1ABC123
            plateNumber = `${randomChar(numbers)}${randomString(letters, 3)}${randomString(numbers, 3)}`;
            break;
        case 'dash':
            // Texas format: ABC-1234
            plateNumber = `${randomString(letters, 3)}-${randomString(numbers, 4)}`;
            break;
        case 'space':
            // New York format: ABC 1234
            plateNumber = `${randomString(letters, 3)} ${randomString(numbers, 4)}`;
            break;
        case 'custom':
            // Florida format: A12 3BC
            plateNumber = `${randomChar(letters)}${randomString(numbers, 2)} ${randomString(numbers, 1)}${randomString(letters, 2)}`;
            break;
    }
    
    plate.innerHTML = `
        <div class="state">${state.name}</div>
        <div class="plate-number">${plateNumber}</div>
    `;
}

function toggleStateDesign() {
    currentStateIndex = (currentStateIndex + 1) % states.length;
    generatePlate();
}

function downloadPlate() {
    html2canvas(plate).then(canvas => {
        const link = document.createElement('a');
        link.download = `usa_plate_${new Date().getTime()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Helper functions
function randomString(chars, length) {
    return Array.from({length}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function randomChar(chars) {
    return chars[Math.floor(Math.random() * chars.length)];
}

// Initial generation
generatePlate();