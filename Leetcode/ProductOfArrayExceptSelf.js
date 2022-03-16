//Given an array of different numbers, right a function that returns the product of that array without arr[i]
//The return must be an array

function productOfArrayWithoutSelf(arr) {
    //* Naive approach 

    //More efficient approach is to find max sum and divide arr[i] from it

    //The pattern to solving this is 

    //Find the products of the left part of the array
    //Find the products of the right part of the array and multiply them 

    let left = [];
    let right = [];
    left[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        left[i] = left[i - 1] * arr[i - 1]
    }
    right[arr.length - 1] = 1;
    for (let i = arr.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * arr[i + 1]
    }
    console.log(left)
    console.log(right)
    for (let i = 0; i < `arr`.length; i++) {
        arr[i] = left[i] * right[i]
    }
    return arr;
}

console.log(productOfArrayWithoutSelf([1, 2, 3, 4]))