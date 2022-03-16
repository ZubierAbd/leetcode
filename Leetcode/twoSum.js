const twoSum = (nums, target) => {
    // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    // You may assume that each input would have exactly one solution, and you may not use the same element twice.

    // You can return the answer in any order.
    // i + j = target
    // j = target - i
    let i = 0
    let j = 1;
    let answer = [];
    //Brute force solution 
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return answer = [i, j]
            }
        }
    }
    return answer;
}

const twoSumBetter = (nums, target) => {
    var result = [];

    var index_map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (index_map.has(diff)) {

            result.push(index_map.get(diff));
            result.push(i);
            break;
        } else {
            index_map.set(nums[i], i)
        }
    }
    return result
}

console.log(twoSum([1, 2, 3, 4], 7))
console.log(twoSumBetter([1, 2, 3, 4], 7))