// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

const plusOne = (digits) => {
    if (digits.length == 1) return digits[0] + 1;
    let x = 1;
    let power = digits.length - 1;
    for (let i = 0; i < digits.length; i++) {
        x += digits[i] * (10 ** power)
        console.log(digits[i] * (10 ** power))
        power--;
    }
    return Array.from(x.toString()).map(Number);
}

console.log(plusOne([1, 2, 3]))

