function convertTemperature(value, unit) {
    if (unit.toLowerCase() === 'c') {
        return (value * 9/5) + 32;
    } else if (unit.toLowerCase() === 'f') {
        return (value - 32) * 5/9;
    } else {
        return "Invalid unit! Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}
console.log(convertTemperature(0, 'C'));
console.log(convertTemperature(100, 'C'));
console.log(convertTemperature(32, 'F'));
console.log(convertTemperature(212, 'F'));
