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

let display = document.querySelector("#display");

function display1 () {
    
    document.querySelector("#no1").addEventListener("click", () => {
        display.textContent = no1.textContent;
    })};

function display2 () {
    document.querySelector("#no2").addEventListener("click", () => {
        display.textContent = no2.textContent;
    })};

function display3 () {
    document.querySelector("#no3").addEventListener("click", () => {
        display.textContent = no3.textContent;
    })};

function display4 () {
    document.querySelector("#no4").addEventListener("click", () => {
        display.textContent = no4.textContent;
    })};

function display5 () {
    document.querySelector("#no5").addEventListener("click", () => {
        display.textContent = no5.textContent;
    })};


function display6 () {
    document.querySelector("#no6").addEventListener("click", () => {
            display.textContent = no4.textContent;
    })};

function display7 () {
    document.querySelector("#no7").addEventListener("click", () => {
            display.textContent = no4.textContent;
    })};

function display8 () {
    document.querySelector("#no8").addEventListener("click", () => {
        display.textContent = no8.textContent;
    })};

function display9 () {
    document.querySelector("#no9").addEventListener("click", () => {
        display.textContent = no9.textContent;
    })};

function display0 () {
    document.querySelector("#no0").addEventListener("click", () => {
        display.textContent = no0.textContent;
    })};


display1();
display2();
display3();
display4();
display5();
display6();
display7();
display8();
display9();
display0();
