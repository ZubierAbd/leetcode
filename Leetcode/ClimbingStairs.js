//You are climbing n stairs. You can climb up either 1 step or 2 steps. How many ways can you climb the stairs? 

//We use dynamic programming to sovle this. This is basically recursion with memory 

var val = [];
function climbStairs(n) {
    //We are returning the number of ways to do it, not the actual order
    if (n <= 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2; //1+1 or 2
    return (getValue(n - 1) + getValue(n - 2));

    //n = 3 = 1+1+1 or 2+1 or 1+2

}

function getValue() {
    if (n < 0) return 0;
    if (val[n] == 0) {
        val[n] = climbStairs(n);
    }
    return val[n];
}