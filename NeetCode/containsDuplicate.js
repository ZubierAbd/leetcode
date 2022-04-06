const containsDuplicate = nums => {
    let map = {}

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1
        if (map[num] >= 2) {
            return true;
        }
    }
    return false;

}

console.log(containsDuplicate([1, 2, 3, 4, 5]))