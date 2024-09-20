let screenValue = '0';

function updateScreen() {
    document.getElementById('screen').innerText = screenValue;
}

function appendToScreen(value) {
    if (screenValue === '0' && value !== '.') {
        screenValue = value;
    } else {
        screenValue += value;
    }
    updateScreen();
}

function clearScreen() {
    screenValue = '0';
    updateScreen();
}

function calculate() {
    try {
        if (screenValue === '9+10') {
            screenValue = 'I LOVE YOU ❤️ Do you want to be girlfriend?';
        } 
        else {
            screenValue = eval(screenValue).toString();
        }
        updateScreen();
    } catch (error) {
        screenValue = 'kalkulator rusak sayangku ❤️';
        updateScreen();
    }
}