
function findMaxInSlidingWindow(nums, K) {
    //K is window size
    let results = [];
    //Brute Force it 

    for (let i = 0; i < nums.length - K + 1; i++) {
        let temp = [];
        for (var j = i; j < i + K; j++) {
            temp.push(nums[j])
        }
        results.push(Math.max(...temp))
    }
    return results;
}

function findMax2(nums, K) {

}

console.log(findMaxInSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))