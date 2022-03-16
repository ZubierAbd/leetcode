function powerOfThree(n) {
    //Return true or false if a number is a power of three or not
    let a = Math.log(n) / Math.log(3)
    return Math.abs(a - Math.round(a)) < 1e-10
}