const majElement = arr => {
    // [3,2,3] => [2,3,3] 
    //We know it is the element that appears > n/2 times so we can assume it will be the middle element or the one after it 

    arr = arr.sort();
    let mid = Math.floor(arr.length / 2);
    return arr[mid];


}

console.log(majElement([3, 2, 2]))