const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const clearprevious = document.getElementById('btnpreviousClear')

let firstNum = 0
let operator = ''
let secondNum = 0

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim()

        if (button.id === 'btnEquals' || button.id === 'btnpreviousClear') {
            return; // Skip processing for '=' and 'AC' buttons here
        }
        if (value === 'Clear') {
            display.value = ''
        } else {
            display.value += value
        }
    });
});


clearprevious.addEventListener('click', () => {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
});


function add(a,b){
    return a + b
}
console.log(add(5,5))

function subtract(a,b){
    return a-b;
}
console.log(subtract(10,5))


function multiply(a,b){
    return a*b
}
console.log(multiply(5,5))


function devide(a,b){
    return a/b
}
console.log(devide(30,2))


function operate(a,operator,b){
    if (operator === "+"){
        return add(a,b)
    } else if (operator === "-"){
        return subtract(a,b)
    } else if (operator === "*"){
        return multiply(a,b )
    } else if (operator === "/"){
        return devide(a,b)
    }else{
        return "Invalid operator"
    }
}

const result = document.getElementById('btnEquals')
result.addEventListener('click', () => {
     const mathExpression = display.value;

    // Match: number operator number
    const match = mathExpression.match(/(\d+)([+\-*/])(\d+)/);

    if (match) {
        firstNum = parseFloat(match[1]);
        operator = match[2];
        secondNum = parseFloat(match[3]);

        display.value = operate(firstNum, operator, secondNum);
    } else {
        display.value = "Error";
    }
});
