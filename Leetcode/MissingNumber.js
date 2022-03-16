const missingNumber = nums => {
    //nums contains numbers in the range 0,n
    nums = nums.sort((a, b) => (a - b));
    for (let i = 0; i < nums.length; i++) {

        if (i === 0 && nums[i] != 0) {
            return 0;
        }
        if (nums[i] + 1 !== nums[i + 1]) {
            return nums[i] + 1;
        }
    }
}


console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))