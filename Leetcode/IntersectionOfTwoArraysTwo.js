// Given two integer arrays nums1 and nums2, return an array of their intersection. 
//Each element in the result must appear as many times as it shows in both arrays 
//and you may return the result in any order.


var intersect = function (nums1, nums2) {
    //Make a hashmap of first array 
    //loop over second array and see if count matches it 

    let f1 = {}
    let result = [];

    //Make a hashmap of first array of nums 
    for (let i = 0; i < nums1.length; i++) {
        f1[nums1[i]] = (f1[nums1[i]] || 0) + 1
    }

    for (let i of nums2) {
        if (f1[i] > 0) {
            result.push(i)
            f1[i]--
        }
    }

    return result
}

console.log(intersect([1, 2, 2, 3], [2, 2]))