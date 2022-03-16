const arr = [2, 1, 5, 1, 3, 2];
const K = 3;

/*
Given an array of positive numbers and a positive number k, find the maximum sum of a contigous subarray of size K
*/

function BF(K, arr) {
    let sums = [];

    for (let i = 0; i < arr.length - K + 1; i++) {
        let sum = 0;
        for (let j = i; j < K + i; j++) {
            sum += arr[j]
        }
        sums.push(sum)
    }
    return Math.max(...sums);
}

function slidingWindow2(K, arr) {
    let results = [];
    let windowStart = 0;
    let windowSum = 0.0;

    for (let end = 0; end < arr.length; end++) {
        //Iterate once over whole arr
        //Add to sum
        windowSum += arr[end];
        //Now do the check based on window size
        if (end >= K - 1) {
            results.push(windowSum);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return Math.max(...results);
}

console.log(BF(K, arr))
console.log(slidingWindow2(K, arr))