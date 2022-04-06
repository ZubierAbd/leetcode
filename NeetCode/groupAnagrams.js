//Given an array of strings, group the anagrams together 

const groupAnagrams = strs => {
    const hash = {};
    for (let word of strs) {
        const sorted = word.split("").sort().join(""); //basically make each word alphabetically same
        if (sorted in hash) {
            hash[sorted].push(word)
        } else {
            hash[sorted] = [word]
        }
    }
    return Object.values(hash);

}

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))