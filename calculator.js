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

let display = document.querySelector("#display");


function numbers () {

    document.querySelector("#no1").addEventListener("click", () => {
        display.textContent += no1.textContent;
    });

    document.querySelector("#no2").addEventListener("click", () => {
        display.textContent += no2.textContent;
    });

    document.querySelector("#no3").addEventListener("click", () => {
        display.textContent += no3.textContent;
    });

    document.querySelector("#no4").addEventListener("click", () => {
        display.textContent += no4.textContent;
    });

    document.querySelector("#no5").addEventListener("click", () => {
        display.textContent += no5.textContent;
    });

    document.querySelector("#no6").addEventListener("click", () => {
            display.textContent += no4.textContent;
    });

    document.querySelector("#no7").addEventListener("click", () => {
            display.textContent += no4.textContent;
    });

    document.querySelector("#no8").addEventListener("click", () => {
        display.textContent += no8.textContent;
    });

    document.querySelector("#no9").addEventListener("click", () => {
        display.textContent += no9.textContent;
     });

    document.querySelector("#no0").addEventListener("click", () => {
        display.textContent += no0.textContent;
     });

    document.querySelector ("#point").addEventListener("click", () => {
        display.textContent += point.textContent;
    });
}

numbers();

function signs () {
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

    document.querySelector("#clear").addEventListener("click", () => {
        display.textContent = "";
    });
}

signs();

    
function calculation (x, y, z) {

    document.querySelector("#equals").addEventListener("click", () => {

        if (operandOne && operator.textContent == "+" && operandTwo) {
            add(operandOne, operandTwo);
        }
        if (operandOne && operator.textContent == "-" && operandTwo) {
            subtract(operandOne, operandTwo);
        }
        if (operandOne && operator.textContent == "x" && operandTwo) {
            multiply(operandOne, operandTwo);
        }
        if (operandOne && operator.textContent == "/" && operandTwo) {
            divide (operandOne, operandTwo);
        }
    })
};
