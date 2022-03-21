

// Given an integer array nums,
// return true if any value appears at least twice in the array, and return false if every element is distinct.


function contains_duplicate(nums) {
    let answer = false;
    //Assuming sorted array 
    nums = nums.sort();
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            answer = true;
        }
    }
    return answer;
}

console.log(contains_duplicate([1, 2, 3, 4, 3]))