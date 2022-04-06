const validPalindrome = (w1) => {
    let left = 0;
    let right = w1.length - 1;
    w1 = w1.toLowerCase();
    while (left <= right) {
        if (w1[left] !== w1[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}

console.log(validPalindrome('dad'))