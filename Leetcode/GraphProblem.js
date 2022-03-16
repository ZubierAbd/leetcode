const solution = (N, A, B) => {

    //Assign maximum value to most frequent, then next most frequent and so on 

    let adjacencyList = {};
    let valueMap = {};

    for (let i = 1; i <= N; i++) {
        if (!adjacencyList[i]) {
            adjacencyList[i] = []
            valueMap[i] = 0;
        }
    }

    for (let i = 0; i < A.length; i++) {
        let v1 = A[i];
        let v2 = B[i];
        if (adjacencyList[v1]) {
            adjacencyList[v1].push(v2)
        }
        if (adjacencyList[v2]) {
            adjacencyList[v2].push(v1)
        }
    }
    let maxValue = N;
    for (let i = N; i > 0; i++) {

    }



    //Loop over map once more and then just sum up the edgs 

}

const A = [1, 3];
const B = [2, 4];

console.log(solution(4, A, B))