function twoSum(nums, target) {
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
    return result;
}