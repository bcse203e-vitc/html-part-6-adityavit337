function characterCount(str) {
    const count = {};    
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }    
    return count;
}
const inputString = "hello";
console.log(characterCount(inputString));
