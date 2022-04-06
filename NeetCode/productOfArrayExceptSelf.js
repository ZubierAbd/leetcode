const prodOfArrayExceptSelf = (arr) => {
    let left = [];
    let right = [];
    left[0] = 1;
    right[arr.length - 1] = 1;
    for (let i = 1; i < arr.length; i++) {
        left[i] = left[i - 1] * arr[i - 1];
    }
    for (let j = arr.length - 2; j >= 0; j--) {
        right[j] = right[j + 1] * arr[j + 1];
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = left[i] * right[i]
    }

    console.log(left)
    console.log(right)
    return arr;
}


console.log(prodOfArrayExceptSelf([1, 2, 3, 4]))