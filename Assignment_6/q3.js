const separateEvenOdd = arr => [
    arr.filter(n => n % 2 === 0),  
    arr.filter(n => n % 2 !== 0)   
];
console.log(separateEvenOdd([1, 2, 3, 4, 5])); 
