function isArmstrongNumber(num) {
    let digits = num.toString().split('').map(Number);
    let power = digits.length;
    let sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
}
console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(9474)); 
console.log(isArmstrongNumber(123)); 
