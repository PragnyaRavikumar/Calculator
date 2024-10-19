let display = document.getElementById('display');

function appendToDisplay(value) {
    if (value === '.' && display.value.includes('.')) return; // Prevent multiple decimals
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function clearLast() {
    display.value = display.value.slice(0, -1); // Remove last character
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('equals').addEventListener('click', calculateResult);
document.getElementById('clearLast').addEventListener('click', clearLast);
document.getElementById('percentage').addEventListener('click', () => {
    display.value = (parseFloat(display.value) / 100).toString(); // Convert to percentage
});

// Keyboard Support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = '0123456789/*-+=.%';
    if (validKeys.includes(key)) {
        if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Backspace') {
            clearLast();
        } else {
            appendToDisplay(key);
        }
    }
});
