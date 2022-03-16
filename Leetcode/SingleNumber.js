// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = (nums) => {
    let f1 = {};
    for (var i = 0; i < nums.length; i++) {
        f1[nums[i]] = (f1[nums[i]] || 0) + 1
    }
    for (num in f1) {
        if (f1[num] == 1) {
            return num
        }
    }
}

console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5]))