function areTheyEqual(target, arr) {
    //Use frequency counter 

    const map = new Map();

    for (let number of target) {
        map.set(number, map.get(number) + 1 || 1);
    }

    for (let number of arr) {
        if (!map.get(number)) {
            return false;
        }
        map.set(number, map.get(number) - 1);
    }
    return true;
}


console.log(areTheyEqual([1, 2, 3, 4], [2, 4, 1, 3]))