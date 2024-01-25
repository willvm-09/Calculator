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

function operate (sign, number1, number2) {
    if(sign == "+") {
        return add(number1, number2);
    } 
    else if (sign == "-"){
        return subtract(number1, number2);
    }
    else if (sign == "*") {
        return multiply(number1, number2);
    }
    else if (sign == "/") {
        return divide (number1, number2);
    }
}

let displayNumber = document.querySelector("#display");

let numbers = document.querySelectorAll("#numbers");
numbers.forEach(number => number.addEventListener("click", (e) => {
    displayNumber.textContent += e.target.textContent;
}));


function allClear() {
    document.querySelector("#clear").addEventListener("click", () => {
        displayNumber.textContent = "";
    });
}

allClear();

function erase () {
    document.querySelector("#delete").addEventListener("click", () => {
        displayNumber.textContent = displayNumber.textContent.toString().slice(0, -1);
    });
}

erase();

function equals () {
    document.querySelector("#equals").addEventListener("click", () => {
        operate();
})};

