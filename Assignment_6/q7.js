function fibonacciIterative(n) {
    let result = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        result.push(a);
        [a, b] = [b, a + b];
    }
    return result;
}
console.log(fibonacciIterative(7)); 
