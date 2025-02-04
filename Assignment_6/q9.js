function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}
console.log(lcm(12, 18)); 
console.log(lcm(7, 5));  

