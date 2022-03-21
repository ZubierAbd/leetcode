// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s,
// find the length of the longest contiguous subarray having all 1s.

//Input -= [0,1,1,0,0,0,1,1,0,1,1] k = 2

function longestSubArrayReplacement(arr, k) {
    let windowStart = 0,
        maxLength = 0,
        maxOnesCount = 0;

    for (let windowEnd = 0; windowEnd < arr.length; i++) {
        if (arr[windowEnd] == 1) {
            maxOnesCount += 1;
        }

        if ((windowEnd - windowStart + 1 - maxOnesCount) > k) {
            if (arr[windowStart] === 1) {
                maxOnesCount -= 1;
            }
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    return maxLength
}