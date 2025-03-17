// script.js
function convert() {
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);

    var convertedValue;
    var resultUnit;

    // Perform conversion logic

    switch (fromUnit) {
        case 'C':
            if (toUnit === 'F') {
                convertedValue = (temperature * 9 / 5) + 32;
                resultUnit = 'F';
            } else if (toUnit === 'K') {
                convertedValue = temperature + 273.15;
                resultUnit = 'K';
            } else if (toUnit === 'R') {
                convertedValue = temperature + 273.15 + 459.67 - 273.15;
                resultUnit = 'R';
            } else {
                convertedValue = temperature;
                resultUnit = 'C';
            }
            break;

        case 'F':
            if (toUnit === 'C') {
                convertedValue = (temperature - 32) * 5 / 9;
                resultUnit = 'C';
            } else if (toUnit === 'K') {
                convertedValue = (temperature - 32) * 5 / 9 + 273.15;
                resultUnit = 'K';
            } else if (toUnit === 'R') {
                convertedValue = temperature + 459.67;
                resultUnit = 'R';
            } else {
                convertedValue = temperature;
                resultUnit = 'F';
            }
            break;

        case 'K':
            if (toUnit === 'C') {
                convertedValue = temperature - 273.15;
                resultUnit = 'C';
            } else if (toUnit === 'F') {
                convertedValue = (temperature - 273.15) * 9 / 5 + 32;
                resultUnit = 'F';
            } else if (toUnit === 'R') {
                convertedValue = temperature * 9 / 5;
                resultUnit = 'R';
            } else {
                convertedValue = temperature;
                resultUnit = 'K';
            }
            break;

        case 'R':
            if (toUnit === 'C') {
                convertedValue = (temperature - 491.67) * 5 / 9;
                resultUnit = 'C';
            } else if (toUnit === 'K') {
                convertedValue = temperature * 5 / 9;
                resultUnit = 'K';
            } else if (toUnit === 'F') {
                convertedValue = (temperature - 459.67);
                resultUnit = 'F';
            } else {
                convertedValue = temperature;
                resultUnit = 'R';
            }
            break;
    }

    document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + resultUnit;
}