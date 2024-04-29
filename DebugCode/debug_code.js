function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operations
        let additionResult = add(num1, num2);
        let multiplicationResult = multiply(num1, num2);
        let divisionResult = divide(num1, num2);

        // Display the results
        displayResult(additionResult, 'Addition');
        displayResult(multiplicationResult, 'Multiplication');
        displayResult(divisionResult, 'Division');
    } else {
        displayResult('Please enter valid numbers');
    }
}

function add(a, b) {
    // Add the numbers
    return a + b;
}

function multiply(a, b) {
    // Multiply the numbers
    return a * b;
}

function divide(a, b) {
    // Check if the divisor is not zero
    if (b !== 0) {
        // Divide the numbers
        return a / b;
    } else {
        // Return an error message if division by zero
        return 'Division by zero';
    }
}

function displayResult(result, operation) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.innerHTML += `<p>${operation} result is: ${result}</p>`;
}
