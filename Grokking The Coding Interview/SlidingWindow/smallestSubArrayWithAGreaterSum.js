const arr = [2, 1, 5, 2, 3, 2]
const S = 7;

/*
Given an array of positive numbers and a positve number S, 
find the length of the smallest subarray whose sum is greater than equal to S. return 0 if no such subarray exists 
*/

//Here sliding window pattern is not fixed

// Add up all elements from beginning until their sum is >= S
//We will remember the length of this window as smallest window so far
//We keep adding one element, shifting the window
//

function smallest_subarray_sum(s, arr) {
    let windowSum = 0,
        minLength = Infinity,
        windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]

        //Shrink the window as small as possible until the window sum is smaller than s
        while (windowSum >= s) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1); //Plus one added for 0 based indexing 
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    if (minLength == Infinity) {
        return 0;
    }
    return minLength;
}