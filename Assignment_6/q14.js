function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    sentence = sentence.toLowerCase();    
    for (let i = 0; i < alphabet.length; i++) {
        if (!sentence.includes(alphabet[i])) {
            return "❌ It is not a pangram";
        }
    }
    return "✅ It is a pangram";
}
const inputSentence = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(inputSentence));
