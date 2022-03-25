class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = [];
        }
    }

    addEdge(n1, n2, weight) {
        this.adjacencyList[n1].push({ node: n2, weight })
        this.adjacencyList[n2].push({ node: n1, weight })
    }
}

let graphy = new WeightedGraph();
graphy.addVertex("A")
graphy.addVertex("B")
graphy.addVertex("C")
graphy.addVertex("D")
graphy.addVertex("E")
graphy.addVertex("F")
graphy.addEdge("A", "B", 4)
graphy.addEdge("A", "C", 2)
graphy.addEdge("B", "E", 3);
graphy.addEdge("E", "F", 1);
graphy.addEdge("D", "E", 3);
graphy.addEdge("D", "F", 1);
graphy.addEdge("C", "F", 4);
graphy.addEdge("C", "D", 4);

console.log(graphy.adjacencyList)
// graphy.addVertex("C", "D", 15)
// graphy.addVertex("C", "E", 4)
// graphy.addVertex("A", "C", 4)