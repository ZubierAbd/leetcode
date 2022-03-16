//Find the longest substring with no more than K distinct chars 



function longest_subString_with_K_chars(arr, K) {
    let windowStart = 0,
        maxLength = 0,
        charFrequency = {};

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        const rightChar = str[windowEnd];
        //Check character and put it in map 
        if (!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar] += 1;

        while (Object.keys(charFrequency).length > k) {
            const leftChar = arr[windowStart];
            charFrequency[leftChar] -= 1;
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            windowStart += 1; // shrink the window
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }

    return maxLength
}