function convertTemperature() {
    let inputTemp = document.getElementById('inputTemp').value;
    let inputUnit = document.getElementById('inputUnit').value;

    if (inputTemp === "") {
        alert("Please enter a temperature");
        return;
    }

    inputTemp = parseFloat(inputTemp);
    let celsius, fahrenheit, kelvin;

    switch (inputUnit) {
        case 'Celsius':
            celsius = inputTemp;
            fahrenheit = (inputTemp * 9/5) + 32;
            kelvin = inputTemp + 273.15;
            break;
        case 'Fahrenheit':
            celsius = (inputTemp - 32) * 5/9;
            fahrenheit = inputTemp;
            kelvin = (inputTemp - 32) * 5/9 + 273.15;
            break;
        case 'Kelvin':
            celsius = inputTemp - 273.15;
            fahrenheit = (inputTemp - 273.15) * 9/5 + 32;
            kelvin = inputTemp;
            break;
    }

    document.getElementById('outputCelsius').innerText = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('outputFahrenheit').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('outputKelvin').innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
}
