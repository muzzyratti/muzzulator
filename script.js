let number1 = "";
let number2 = "";
let operator = "";

function operate (number1, number2, operator) {
    switch (operator) {
        case '+':
            return add(number1, number2);
            break;
        case '-':
            return subtract(number1, number2);
            break;
        case '*':
            return multiply(number1, number2);
            break;
        case '/':
            if (number2 == 0) {
                return "Don't divide 0!"
            } else {
                return divide(number1, number2);
            }
            break;
    }
}

console.log(operate(10, 4, '/'));

function add (num1, num2) {
    let addResult = num1 + num2;
    return addResult;
}

function subtract (num1, num2) {
    let subtractResult = num1 - num2;
    return subtractResult;
}

function multiply (num1, num2) {
    let multiplyResult = num1 * num2;
    return multiplyResult;
}

function divide (num1, num2) {
    let divideResult = num1 / num2;
    return divideResult;
}