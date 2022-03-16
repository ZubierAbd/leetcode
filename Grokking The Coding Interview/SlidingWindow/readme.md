Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

let arr = [2,2,2,3,4,5,6,7,4]
let K = 3; 

In this case, we break down the array into smaller subarrays which are of size 4

This can be broken down into subarrays
[2,2,2] , [2,2,3], [2,3,4], [3,4,5] , [4,5,6], [5,6,7], [6,7,4]

Brute force is we find the sum of each sub array
[6,7,9,11,15,18,17]

Other way is we do sliding window. 

We define result; window start and window end and windowSum. 

We find the sum over each window, iterating over windowEnd until we hit the length of the window 

This is always K-1 index. At that point, we start sliding the window. We do something to results, we subtract start from sum and then we append start.


