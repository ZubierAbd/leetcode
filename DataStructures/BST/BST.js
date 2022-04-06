class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        //If there is no root, make this thing the root
        if (!this.root) {
            this.root = newNode;
            return;
        }
        //If there is a root, check if the root value is greater than or equal to the val of new Node
        var currentNode = this.root;
        //Left side
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                } else {
                    currentNode = currentNode.left;
                }
            } else if (value > currentNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                } else {
                    currentNode = currentNode.right;
                }
            }
            else {
                return false;
            }
        }
    }

    containsNode(value) {
        //If there is no root, return false; 
        //If there is a root, check if the value is the one we are looking for 

        //If not, check if value is greater or less than
        //If the value is greater, check if there is a node to the right. If there is not, we are done searching 

        if (!this.root) return false;
        var current = this.root;
        var found = false;
        if (value == this.root.value) return true;

        while (current && !found) {
            //left path 
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return current;
    }

    BreadthFirstSearch() {
        var queue = [];
        var data = [];
        var node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value)
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right)
            }

        }
        return data;
    }

    //DFS have three ways to do it 
    //Preoder
    //Postorder
    //Inorder 

    DFSPre() {
        let visited = [];
        let current = this.root;

        //write helper function that accepts a node, push value of node to the visited array, if node has left property call helper with node.left, 
        //if right prop, call helper with node.rght 
        //invoke helper with current variable 

        helper(current);

        function helper(node) {
            visited.push(node.value);
            if (node.left) {
                helper(node.left)
            }
            if (node.right) {
                helper(node.right)
            }
        }

        return visited;
    }

    DFSPost() {
        let visited = [];
        let current = this.root;
        helper(current);


        function helper(node) {
            if (node.left) {
                helper(node.left)
            }
            if (node.right) {
                helper(node.right)
            }
            visited.push(node.value);
        }

        return visited;

    }

    DFSInOrder() {
        let visited = [];
        let current = this.root;
        helper(current);


        function helper(node) {
            if (node.left) {
                helper(node.left)
            }
            visited.push(node.value);
            if (node.right) {
                helper(node.right)
            }

        }

        return visited;
    }

    invert() {

    }

}

//ON a really wide tree, breadhth first is worse since the space complexity is worse

//If wider than deeper, use depth 
//If deeper than wider, use breadth

var tree = new BST();

tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)

console.log(tree);
console.log(tree.containsNode(10))
console.log(tree.BreadthFirstSearch())
console.log(tree.DFSPre())
console.log(tree.DFSPost())
console.log(tree.DFSInOrder())
