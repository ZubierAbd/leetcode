//Given a sorted array, create a new array containing the squares of all of the numbers of input array in the sorted order

function mySolution(arr) {
    let newArr = arr.map((num) => num * num);

    return newArr.sort();
}

function make_squares(arr) {
    let n = arr.length;
    let left = 0;
    let right = n - 1;
    const squares = Array(arr.length).fill(0);
    let highestSqIdx = n - 1;

    while (left <= right) {
        let leftSquare = arr[left] * arr[left];
        let rightSquare = arr[right] * arr[right];
        if (leftSquare > rightSquare) {
            squares[highestSqIdx] = leftSquare;
            left += 1;
        } else {
            squares[highestSqIdx] = rightSquare;
            right -= 1;
        }
        highestSqIdx -= 1;
    }

    return squares;
}

console.log(mySolution([-2, -2, -1, 0, 1, 2, 3]))
console.log(make_squares([-2, -2, -1, 0, 1, 2, 3]))