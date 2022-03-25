//Store the nodes
//Store the connections

//Store in 2 ways - adj matrix or adj list

/*
      {
          "America" : ["Bangladesh", "France"],
          "Bangladesh: ["America", "Canada"],
          "Canada: ["Bangladesh", "Denmark"],
          "Denmark: ["Canada", "England"],
          "England: ["Denmark", "France"],
          "France: ["England", "America"]
      }

*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = [];
        }
    }

    addEdge(n1, n2) {
        this.adjacencyList[n1].push(n2)
        this.adjacencyList[n2].push(n1)
    }

    removeEdge(n1, n2) {
        if (this.adjacencyList[n1]) {
            this.adjacencyList[n1] = this.adjacencyList[n1].filter(val => val !== n2)
        }
        if (this.adjacencyList[n2]) {
            this.adjacencyList[n2] = this.adjacencyList[n2].filter(val => val !== n1)
        }

    }

    removeVertex(name) {
        //Remove the vertex from adjacency list and loop through each of the nodes and filter the adjacency list
        let nodes = Object.keys(this.adjacencyList);

        nodes.forEach((node) => {
            this.adjacencyList[node] = this.adjacencyList[node].filter(val => val !== name)
        })
        delete this.adjacencyList[name];
    }

    DFSRecursive(start) {
        //If vertex is empty return 
        //add vertex to results 
        //mark vertex as viisted
        //for each neigbour in vertex neighbours 
        //if neighbour not visited
        // call DFS on neighbour

        const result = [];
        const visited = {};

        const adjacencyList = this.adjacencyList;

        function DFS(vertex) {
            if (!vertex) {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbour) => {
                if (!visited[neighbour]) {
                    return DFS(neighbour)
                }
            });
        }

        DFS(start);
        return result;
    }

    BFS(start) {
        const result = [];
        const visited = {}
        let queue = [start];
        let currentVertex;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(n => {
                if (!visited[n]) {
                    visited[n] = true;
                    queue.push(n);
                }
            })
        }
        return result;
    }
}


var graphy = new Graph();

graphy.addVertex("America")
graphy.addVertex("Bangladesh")
graphy.addVertex("Canada")
graphy.addVertex("Denmark")
graphy.addVertex("England")
graphy.addVertex("France")
graphy.addVertex("Germany")
graphy.addEdge("America", "Bangladesh");
graphy.addEdge("Bangladesh", "Canada");
graphy.addEdge("Canada", "Denmark");
graphy.addEdge("Denmark", "England");
graphy.addEdge("Denmark", "France");
graphy.addEdge("England", "France");
graphy.addEdge("America", "France");
graphy.addEdge("America", "Germany");

console.log(graphy.adjacencyList)

graphy.removeVertex('Germany');

console.log(graphy.adjacencyList)
console.log(graphy.DFSRecursive("America"))
console.log(graphy.BFS("America"))