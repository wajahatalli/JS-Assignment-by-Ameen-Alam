
var num1 = parseFloat(prompt("Enter first Number!"));
var num2 = parseFloat(prompt("Enter second number!"));

const operator = prompt("Enter an operator (Either +,-,* or /)");

if (operator == '+') {
    result = num1 + num2;
}

else if (operator == '-'){
    result = num1 - num2;
}

else if (operator == '*') {
    result = num1 * num2;
}

else if (operator == '/'){
    result = num1 / num2;
}

else {
    alert("Please try again & must use Operator.");
}

alert(`${num1} ${operator} ${num2} = ${result}`);
