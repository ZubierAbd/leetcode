//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//Brute force 

const containsDuplicate = (nums) => {
    let answer = false; 4
    //Assuming sorted array 
    nums = nums.sort();
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            answer = true;
        }
    }
    return answer;
}

console.log(containsDuplicate([1, 2, 3, 5]))