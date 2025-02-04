function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((sum, num) => sum + num, 0);    
    return totalSum - arrSum;
}
const inputArray = [1, 2, 3, 5, 6];
console.log(findMissingNumber(inputArray));
