function numberOfItems(s, startIndices, endIndices) {
    //* = items 
    // | = open / close
    // s = |**|*|*|
    let results = [];
    //we assume startIndices === endIndices
    //for each pair of indices, we find the substring first 
    for (let i = 0; i < startIndices.length; i++) {
        let start = startIndices[i];
        let end = endIndices[i];
        let substring = s.substring(start - 1, end)
        results.push(calculateNumberOfStars(substring))
    }
    return results;

}

function calculateNumberOfStars(s) { //Returns a number
    let pipeIdx = [];
    //We can break this problem into two parts 

    //So we find indexes of all of the pipes 
    //If there is only one pipe, we return 0
    //If there are multiple pipes, we find the number of stars between pipes and them and add 

    //So first pass we just get indexes of pipes 
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '|') {
            pipeIdx.push(i);
        }
    }
    if (pipeIdx.length == 1) return 0;
    let count = 0;
    for (let i = 1; i < pipeIdx.length; i++) {
        let x = s.substring(i - 1, i)
        for (let letter of x) {
            if (letter == "*") {
                count++;
            }
        }
    }
    return count;
}

function calcItems(s) {
    var left = null;
    var right = null;
    for (let i = 0; i < )
}

var s = '|**|*|*'
var startIndices = [1, 1]
var endIndices = [5, 6]
console.log(numberOfItems(s, startIndices, endIndices));