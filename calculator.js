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
    if (operator == "x") {
        multiply(operandOne, operandTwo);
    }
    if (operator == "/") {
        divide (operandOne, operandTwo);
    }
}

let display = document.querySelector("#display");


operandOne = function () {

    document.querySelector("#no1").addEventListener("click", () => {
        display.textContent = no1.textContent;
    });


    document.querySelector("#no2").addEventListener("click", () => {
        display.textContent = no2.textContent;
    });



    document.querySelector("#no3").addEventListener("click", () => {
        display.textContent = no3.textContent;
    });


    document.querySelector("#no4").addEventListener("click", () => {
        display.textContent = no4.textContent;
    });


    document.querySelector("#no5").addEventListener("click", () => {
        display.textContent = no5.textContent;
    });



    document.querySelector("#no6").addEventListener("click", () => {
            display.textContent = no4.textContent;
    });


    document.querySelector("#no7").addEventListener("click", () => {
            display.textContent = no4.textContent;
    });


    document.querySelector("#no8").addEventListener("click", () => {
        display.textContent = no8.textContent;
    });


    document.querySelector("#no9").addEventListener("click", () => {
        display.textContent = no9.textContent;
     });


    document.querySelector("#no0").addEventListener("click", () => {
        display.textContent = no0.textContent;
     });
}

operandOne();

operandTwo = function () {
    document.querySelector("#no1").addEventListener("click", () => {
        display.textContent = no1.textContent;
    });


    document.querySelector("#no2").addEventListener("click", () => {
        display.textContent = no2.textContent;
    });



    document.querySelector("#no3").addEventListener("click", () => {
        display.textContent = no3.textContent;
    });


    document.querySelector("#no4").addEventListener("click", () => {
        display.textContent = no4.textContent;
    });


    document.querySelector("#no5").addEventListener("click", () => {
        display.textContent = no5.textContent;
    });



    document.querySelector("#no6").addEventListener("click", () => {
            display.textContent = no4.textContent;
    });


    document.querySelector("#no7").addEventListener("click", () => {
            display.textContent = no4.textContent;
    });


    document.querySelector("#no8").addEventListener("click", () => {
        display.textContent = no8.textContent;
    });


    document.querySelector("#no9").addEventListener("click", () => {
        display.textContent = no9.textContent;
     });


    document.querySelector("#no0").addEventListener("click", () => {
        display.textContent = no0.textContent;
     });
}

operandTwo();

function displaySymbols () {

    document.querySelector ("#point").addEventListener("click", () => {
        display.textContent = point.textContent;
    });

    document.querySelector ("#plus").addEventListener("click", () => {
        display.textContent = plus.textContent;
    });

    document.querySelector ("#minus").addEventListener("click", () => {
        display.textContent = minus.textContent;
    });

    document.querySelector ("#times").addEventListener("click", () => {
        display.textContent = times.textContent;
    });

    document.querySelector ("#division").addEventListener("click", () => {
        display.textContent = division.textContent;
    });
}

displaySymbols();

