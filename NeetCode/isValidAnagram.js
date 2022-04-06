function validAnagram(word1, word2) {
    if (word1.length !== word2.length) return false;
    let f1 = {}
    let f2 = {}

    for (let letter of word1) {
        f1[letter] = (f1[letter] || 0) + 1;
    }
    for (let letter of word2) {
        f2[letter] = (f2[letter] || 0) + 1;
    }

    for (let letter in f2) {
        if (f1[letter] != f2[letter]) {
            return false;
        }
    }
    return true;
}