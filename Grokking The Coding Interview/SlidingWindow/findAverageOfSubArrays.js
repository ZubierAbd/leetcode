function find_averages_of_subarrays(K, arr) {
    let result = [];
    for (let i = 0; i < arr.length - K + 1; i++) {
        // find sum of next 'K' elements
        sum = 0.0;
        for (let j = i; j < i + K; j++) {
            sum += arr[j];
        }
        result.push(sum / K); // calculate average
    }

    return result;
}

function slidingWindow(K, arr) {
    let result = [];
    let windowSum = 0.0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if (windowEnd >= K - 1) {
            result.push(windowSum / K);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return result;
}

const array = [1, 3, 2, 6, -1, 4, 1, 8, 2]
const K = 5;

console.log(find_averages_of_subarrays(K, array))
console.log(slidingWindow(K, array))