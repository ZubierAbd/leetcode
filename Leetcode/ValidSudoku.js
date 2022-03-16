// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

//     Each row must contain the digits 1-9 without repetition.
//     Each column must contain the digits 1-9 without repetition.
//     Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.


//Each row must contain the digits 1-9 without repetition so create a function for that 
//Each column must contain the digits 1-9 so create a function for that 
// Each of the 3X3 subboxes of the grid must contain the digits 1-9 without repetition 
//The input is an array of arrays - each row represented by an array of 9 digits 

//Creating helper functions 

function notInRow(arr, row) {
    let st = new Set();

    for (let i = 0; i < 9; i++) {
        //If already encountered return false
        if (st.has(arr[row][i])) {
            return false;
        }
        //If not an empty cell, insert value at the current cell in the set
        if (arr[row][i] != '.') {
            st.add(arr[row][i]);
        }
    }
    return true;
}

function notInCol(arr, col) {
    let st = new Set();
    for (let i = 0; i < 9; i++) {
        // If already encountered before,
        // return false
        if (st.has(arr[i][col]))
            return false;

        // If it is not an empty cell,
        // insert value at the current
        // cell in the set
        if (arr[i][col] != '.')
            st.add(arr[i][col]);
    }
    return true;
}

function notInBox(arr, startRow, startCol) {
    let st = new Set();

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            let curr = arr[row + startRow][col + startCol];
            if (st.has(curr))
                return false;
            if (curr != '.')
                st.add(curr);
        }
    }
    return true;
}

function isValid(arr, row, col) {
    return notInRow(arr, row) && notInCol(arr, col) &&
        notInBox(arr, row - row % 3, col - col % 3);
}

function isValidConfig(arr, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!isValid(arr, i, j))
                return false;
        }
    }
    return true;
}

let board = [['5', '3', '.', '.', '7', '.', '.', '.', '.'],
['6', '.', '.', '1', '9', '5', '.', '.', '.'],
['.', '9', '8', '.', '.', '.', '.', '6', '.'],
['8', '.', '.', '.', '6', '.', '.', '.', '3'],
['4', '.', '.', '8', '.', '3', '.', '.', '1'],
['7', '.', '.', '.', '2', '.', '.', '.', '6'],
['.', '6', '.', '.', '.', '.', '2', '8', '.'],
['.', '.', '.', '4', '1', '9', '.', '.', '5'],
['.', '.', '.', '.', '8', '.', '.', '7', '9']];

console.log(isValidConfig(board, 9))
