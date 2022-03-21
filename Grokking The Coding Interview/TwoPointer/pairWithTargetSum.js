// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

const pairWithTargetSum = (arr, sum) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let total = arr[left] + arr[right];
        if (total == sum) {
            return [left, right];
        } else if (total > sum) {
            right--;
        } else if (total < sum) {
            left++;
        }
    }
}

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6))
console.log(pairWithTargetSum([2, 5, 9, 11], 11))

