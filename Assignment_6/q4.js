const reverseNumber = num => parseInt(Math.abs(num).toString().split('').reverse().join('')) * Math.sign(num);
const isPalindrome = num => num === reverseNumber(num);
console.log(reverseNumber(12345)); 
console.log(isPalindrome(12321));  
console.log(isPalindrome(12345));  
