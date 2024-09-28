<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Temperature Converter</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="converter-container">
        <h1>Temperature Converter</h1>
        <div class="input-section">
            <input type="number" id="inputTemp" placeholder="Enter temperature">
            <select id="inputUnit">
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
            </select>
        </div>

        <button onclick="convertTemperature()">Convert</button>

        <div class="output-section">
            <p id="outputCelsius">Celsius: </p>
            <p id="outputFahrenheit">Fahrenheit: </p>
            <p id="outputKelvin">Kelvin: </p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
