function firstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}
const inputString = "swiss";
console.log(firstNonRepeatingCharacter(inputString));
