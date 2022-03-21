In problems where we deal with sorted arrays or linkedLists, two pointer approach is very useful 

Consider the following problem, Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to 
the target sum

Start at both ends of the array and work downwards. When the two pointers add up to the target sum, move one of the pointers

In the case where the sum of the two pointers is too high, lower right pointer
In the case where the sum of the two pointers is too low, increment left


[1,2,3,4,5,6,7,8]

we want 7

left = 1
right = 8
total is 9
lower right 
---------------
right = 7
left = 1
still too big
--------------
right = 6
left = 1
correct 

so one solution is 6 + 1 = 7