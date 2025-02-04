function findSecondSmallestAndLargest(arr) {
    arr.sort((a, b) => a - b);  
    let secondSmallest = arr[1];
    let secondLargest = arr[arr.length - 2];    
    return {
        secondSmallest: secondSmallest,
        secondLargest: secondLargest
    };
}
const inputArray = [4, 2, 9, 1, 5, 6];
const result = findSecondSmallestAndLargest(inputArray);
console.log("Second Smallest:", result.secondSmallest);
console.log("Second Largest:", result.secondLargest);
