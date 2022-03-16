const moveZeroes = (nums) => {
    var lastNonZeroIndex = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[lastNonZeroIndex++] = nums[i]
        }
    }

    //After we have processed new elements,
    //akk the non-zero elements are already at beginning of array 
    //we pad the rest with 0s 
    for (i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

console.log(moveZeroes([0, 0, 0, 1, 1, 2]))