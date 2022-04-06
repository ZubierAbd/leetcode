const twoSumII = (nums, target) => {
    //returns index of if it matches 

    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum == target) {
            return [left, right]
        } else if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        }
    }
}

console.log(twoSumII([2, 3, 4], 12))