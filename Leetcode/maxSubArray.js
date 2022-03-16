const maxSubArray = nums => {
    let windowStart = 0,
        maxSum = 0,
        windowSum = 0,
        results = [];

    for (let windowEnd = 0; windowEnd < nums.length; i++) {
        windowSum += nums[windowEnd];
        maxSum = Math.max(windowSum, maxSum);
    }
}