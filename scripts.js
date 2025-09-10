// Get references to DOM elements
const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')
const operators = ['+', '-', '*', '/']

let firstNum = ''
let operator = ''
let secondNum = ''

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent.trim();

    // skip special buttons handled separately
    if (button.id === 'btnEquals' || button.id === 'clearprevious') 
        return

    if (value === 'Clear') {
      display.value = ''
      firstNum = ''
      operator = ''
      secondNum = ''
      return
    }

    // If user presses an operator
    if (operators.includes(value)) {
      if (firstNum && operator && secondNum) {
        // evaluate current pair before applying new operator
        const result = operate(parseFloat(firstNum), operator, parseFloat(secondNum));
        display.value = result;
        firstNum = result.toString();
        secondNum = '';
      } else {
        firstNum = display.value // save current number
      }
      operator = value // store operator
      display.value += value
      return
    }

    // If it's a number
    display.value += value

    // if operator already chosen, we are building secondNum
    if (operator) {
      const parts = display.value.split(operator)
      secondNum = parts[1]; // text after operator
    }
  });
});

// arethmetic operations function 
function add(a,b){
    return a + b
}

function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b
}
function devide(a,b){
    return a/b
}


// operator function to get results of an expression 
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


// Equals button
const resultBtn = document.getElementById('btnEquals');
resultBtn.addEventListener('click', () => {
  if (firstNum && operator && secondNum) {
    const result = operate(parseFloat(firstNum), operator, parseFloat(secondNum))
    display.value = result;
    firstNum = result.toString()
    operator = '';
    secondNum = '';
  }
})

//function to get results when the "=" button is clicked
const result = document.getElementById('btnEquals')
result.addEventListener('click', () => {
     const mathExpression = display.value

    // Match: number operator number
    const match = mathExpression.match(/(\d+)([+\-*/])(\d+)/)

    if (match) {
        firstNum = parseFloat(match[1])
        operator = match[2];
        secondNum = parseFloat(match[3])

        display.value = operate(firstNum, operator, secondNum)  
    } else {
        display.value = "Error"
    }
});









