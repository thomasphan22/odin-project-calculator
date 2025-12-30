const add = (a, b) => a + b;

const multiply = (a , b) => a * b;

const subtract = (a , b) => a - b;

const divide = (a , b) => a / b;

const operate = (n1, n2, o) => {
    if (o == "add") {
        return add(n1, n2);
    } else if (o == "multiply") {
        return multiply(n1, n2);
    } else if (o == "subtract") {
        return subtract(n1, n2);
    } else if (o == "divide") {
        return divide(n1, n2);
    }
}

const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator");

let secondNum = false;
let num1 = "";
let num2 = "";
let operator = "";

const updateDisplay = (newNum) => {
    display.textContent = newNum;
    num1 = newNum;
    num2 = "";
}

calculator.addEventListener("click", (e) => {
    if (e.target.matches(".number")) {
        if (secondNum) {
            num2 += e.target.dataset.value;
        } else {
            num1 += e.target.dataset.value;
        }
        display.textContent += e.target.dataset.value;
    } else if (e.target.matches(".operator")) {
        if (secondNum) {
            let answer = operate(parseInt(num1), parseInt(num2), operator);
            updateDisplay(answer);
        } else {
            secondNum = true;
        }
        operator = e.target.dataset.op;
        display.textContent += e.target.textContent.trim();
    } else if (e.target.matches(".equals")) {
        let answer = operate(parseInt(num1), parseInt(num2), operator);
        updateDisplay(answer);
        secondNum = false;
    } else if (e.target.matches(".clear")) {
        updateDisplay("");
        secondNum = false;
    }
});