function minimalHeaviestSetA(arr) {
    let n = arr.length;
    var aLength;
    if (n % 2 == 0) {
        aLength = n / 2 - 1;
    } else {
        aLength = Math.floor(n / 2);
    }
    var bLength = n - aLength;
    arr = arr.sort();
    const a = [];
    const b = []
    for (let i = 0; i < bLength; i++) {
        a.push(arr[i]);
    }
    for (let i = bLength; i < n; i++) {
        b.push(arr[i])
    }
    return b
}

console.log(minimalHeaviestSetA([3, 7, 5, 6, 2]))
console.log(minimalHeaviestSetA([4, 2, 5, 1, 6]))
console.log(minimalHeaviestSetA([5, 3, 2, 4, 1, 2]))