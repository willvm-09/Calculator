function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

let operandOne;
let operandTwo;
let operator;

function operate (operator, operandOne, operandTwo) {
    if (operator == "+") {
        add(operandOne, operandTwo);
    }
    if (operator == "-") {
        subtract(operandOne, operandTwo);
    }
    if (operator == "*") {
        multiply(operandOne, operandTwo);
    }
    if (operator == "/") {
        divide (operandOne, operandTwo);
    }
}
