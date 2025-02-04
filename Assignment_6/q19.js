function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
const inputSentence = "I love programming in JavaScript";
console.log(longestWord(inputSentence));
