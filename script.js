function generatePlate() {
    const lettersInput = document.getElementById('letters');
    const numbersInput = document.getElementById('numbers');
    
    // Get and format values
    let letters = lettersInput.value.toUpperCase().substring(0, 3);
    let numbers = numbersInput.value.substring(0, 3);
    
    // Pad numbers with leading zeros if necessary
    numbers = numbers.padStart(3, '0');
    
    // Update display
    document.querySelector('.letters').textContent = letters;
    document.querySelector('.numbers').textContent = numbers;
    
    // Clear inputs
    lettersInput.value = '';
    numbersInput.value = '';
}

// Input validation
document.getElementById('letters').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
});

document.getElementById('numbers').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '').substring(0, 3);
});
