function countVowelsAndConsonants(str) {
    let vowels = 'aeiouAEIOU';
    let vowelCount = 0, consonantCount = 0;

    for (let char of str.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            vowels.includes(char) ? vowelCount++ : consonantCount++;
        }
    }
    console.log(`Vowels: ${vowelCount}`);
    console.log(`Consonants: ${consonantCount}`);
}
countVowelsAndConsonants("JavaScript");
