// You are visiting a farm to collect fruits. 
// The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.
// You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:


// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Similar to last one but the K has to be 2 since we have two baskets 

const trees = ['A', 'B', 'C', 'A', 'C']

function fruitTrees(arr) {
    let K = 2;
    let fruitMap = {}
    let maxCount = 0;
    let windowStart = 0;

    for (let end = 0; end < arr.length; end++) {
        const rightFruit = arr[end];
        if (!(rightFruit in fruitMap)) {
            fruitMap[rightFruit] = 0;
        }
        fruitMap[rightFruit] += 1;

        // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
        while (Object.keys(fruitMap).length > 2) {
            const leftFruit = arr[windowStart];
            fruitMap[leftFruit] -= 1;
            if (fruitMap[leftFruit] === 0) {
                delete fruitMap[leftFruit];
            }
            windowStart += 1; // shrink the window
        }
        maxCount = Math.max(maxCount, end - windowStart + 1)

    }
    console.log(fruitMap)
    return maxCount
}

console.log(fruitTrees(trees))