const strStr = (haystack, needle) => {
    var needleLength = needle.length;
    if (haystack == null || needle == null) {
        return -1;
    }

    if (haystack === needle) {
        return 0;
    }

    for (let i = 0; i < haystack.length - needleLength + 1; i++) {
        if (haystack.substring(i, i + needleLength) === needle) {
            return i;
        }
    }
    return -1;
}

console.log(strStr('abc', 'c'))