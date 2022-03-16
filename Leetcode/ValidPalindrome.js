const validPalindrome = (s) => {
    s = s.toLowerCase();
    const regex = /[^A-Za-z0-9]/g;
    const s2 = s.replace(regex, "");
    let start = 0;
    let end = s2.length - 1;
    while (start != end) {
        if (s2[start] != s2[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(validPalindrome('A man, a plan, a canal: Panama'))