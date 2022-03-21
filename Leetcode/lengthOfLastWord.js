// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = s => {
    if (!s.length) return false;

    s = s.trim();
    var splitArray = s.split(" ");
    var lastWord = splitArray[splitArray.length - 1];
    return lastWord.length;

}

console.log(lengthOfLastWord("Hello World "))