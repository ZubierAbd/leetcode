const mergeSortedArray = (n1, m, n2, n) => {
    let last = m + n - 1;

    while (m > 0 && n > 0) {
        if (n1[m - 1] > n2[n - 1]) {
            n1[last - 1] = n1[m - 1];
            m--;
        } else {
            n1[last - 1] = n2[n - 1];
            n--;
        }
        last--;
    }

    while (n > 0) {
        n1[last - 1] = n2[n - 1];
        n--;
        last--;
    }
    return n1;
}

console.log(mergeSortedArray([1, 2, 3, 4, 0, 0], 4, [1, 5], 2))