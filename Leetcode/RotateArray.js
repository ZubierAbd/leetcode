//Given an array rotate k steps to the right where k is non negative 
// [1,2,3,4,5,6,7]
//pop
//unshift 

const rotateArray = (nums, k) => {
    //Reverse whole list 
    //Reverse first k numbers
    //Reverse last n-k numbers 
    nums = nums.reverse();
    var a = nums.splice(0, k)
    a = a.reverse()
    nums = nums.reverse()
    let x = a.concat(nums)

    return x

}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))
//console.log(rotateArray([-1, -100, 3, 99], 2))