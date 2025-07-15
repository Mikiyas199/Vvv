const resultField = document.getElementById('result');

// Appends the clicked character to the display
function appendCharacter(char) {
    resultField.value += char;
}

// Clears the entire display
function clearDisplay() {
    resultField.value = '';
}

// Deletes the last character from the display
function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

// Calculates the result of the expression in the display
function calculateResult() {
    try {
        // Replace custom symbols with standard operators for evaluation
        let expression = resultField.value.replace(/×/g, '*').replace(/÷/g, '/');
        
        // Use the Function constructor for a safer alternative to eval()
        const calculate = new Function('return ' + expression);
        const result = calculate();

        resultField.value = result;
    } catch (error) {
        resultField.value = 'Error';
    }
}