<<<<<<< HEAD
<<<<<<< HEAD
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, subtract, multiply };
=======
=======
>>>>>>> 14059b065258f6ff5c931cfe40297f17059ad587
function divide(a, b) {
  if(b === 0) throw new Error("Деление на ноль!");
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
<<<<<<< HEAD
>>>>>>> 14059b0 (Реализовано деление с проверкой на ноль)
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Деление на ноль!");
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
=======
>>>>>>> 14059b065258f6ff5c931cfe40297f17059ad587
