var twoSum = function (nums, target) {

    var index_map = new Map();
    var result = [];

    //Index Map is one where the value and index are stored
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (index_map.has(diff)) {
            result.push(index_map.get(diff))
            result.push(i)
            break;
        } else {
            index_map.set(nums[i], i)
        }
    }
    return result;
}

console.log(twoSum([2, 3, 4, 5, 1, 2, 3], 5))
console.log(twoSum([2, 3, 4, 5, 1, 2, 3], 7))