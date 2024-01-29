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

function operate (num1, num2) {

    if(operator === "+") {
        return add(num1, num2);
    } 
    else if (operator === "-"){
        return subtract(num1, num2);
    }
    else if (operator === "x") {
        return multiply(num1, num2);
    }
    else if (operator === "/") {
        return divide (num1, num2);
    }
}

let previousValue = "";
let operator = "";
let currentValue = "";

let previousScreen = document.querySelector(".firstDisplay");
let currentScreen = document.querySelector(".secondDisplay");

function displayNumbers () {
    
    let numbers = document.querySelectorAll(".numbers");
    numbers.forEach(number => number.addEventListener("click", (e) => {
    let num = e.target.textContent;
    if (currentValue.length <= 10) {
    currentValue += num;
    currentScreen.textContent = currentValue;

}}));   
}

displayNumbers();

function displayOperators () {
    let operators = document.querySelectorAll (".signs");
    operators.forEach(sign => sign.addEventListener("click", (e) => {
    let op = e.target.textContent;
    operator = op;
    previousValue = currentValue;
    currentValue = "";
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue; 
}));
}


displayOperators();

function equals () {
let result = document.querySelector("#equals");
result.addEventListener("click", () => {
    if (currentValue != "" && previousValue != ""){
        previousValue = Number(previousValue);
        currentValue = Number(currentValue); 
        previousScreen.textContent = previousValue + operator + currentValue;
        currentScreen.textContent = operate(previousValue, currentValue);
        let total = operate(previousValue, currentValue);
        currentValue = total;
    }
});
}

equals();

function allClear() {
    document.querySelector("#clear").addEventListener("click", () => {
        previousValue = "";
        currentValue = "";
        operator = "";
        previousScreen.textContent = currentValue
        currentScreen.textContent = currentValue;
    });
}

allClear();

function erase () {
    document.querySelector("#delete").addEventListener("click", () => {
        currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);
    });
}

erase();
