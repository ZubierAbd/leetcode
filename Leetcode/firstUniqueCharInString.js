//Given a string s, find the first non repeating character in it and return its index. If it does not exist, return -1;

const firstNonUniqueCharInString = (s) => {
    let count = {};
    for (var i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
    }

    for (var i = 0; i < s.length; i++) {
        if (count[s[i]] == 1) {
            return i;
        }
    }
    return -1;
}

console.log(firstNonUniqueCharInString('aabb'))