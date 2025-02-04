function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
console.log(gcd(12, 18)); 
console.log(gcd(48, 18)); 
console.log(gcd(101, 103)); 
