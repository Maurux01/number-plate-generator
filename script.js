const cities = [
  "Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", 
  "Bucaramanga", "Pereira", "Manizales", "Santa Marta", 
  "Cúcuta", "Armenia", "Villavicencio", "Ibagué", "Neiva",
  "Popayán", "Montería", "Sincelejo", "Valledupar", "Tunja",
  "Pasto"
];

function getRandomCity() {
  return cities[Math.floor(Math.random() * cities.length)];
}

function getRandomCode() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const randomLetters = Array.from({ length: 3 }, () => letters.charAt(Math.floor(Math.random() * letters.length))).join('');
  const randomNumbers = Array.from({ length: 3 }, () => numbers.charAt(Math.floor(Math.random() * numbers.length))).join('');
  return `${randomLetters}-${randomNumbers}`;
}

function generatePlate() {
  document.getElementById("city").textContent = getRandomCity();
  document.getElementById("code").textContent = getRandomCode();
}
