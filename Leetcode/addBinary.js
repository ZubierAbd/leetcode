//Given two binary strings add them and return answer as string 

function addInBinary(num1, num2) {
    let sum = Number(num1) + Number(num2);
    return sum.toString(2);
}

console.log(addInBinary("11", "1"));