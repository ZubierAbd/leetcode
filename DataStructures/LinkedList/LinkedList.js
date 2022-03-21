class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        var node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }

    traverse() {
        var current = this.head;
        while (current) {
            console.log(current.val);
            console.log({
                val: current.val,
                next: current.next
            })
            current = current.next;
        }
    }

    pop() {
        //If no nodes, return undefined
        //Loop through list until you reach tail
        //set the property of second to last node to be null
        //Set the tail to be second to last node 
        //Decrement length by 1 
        //Return the value of the node removed

        if (!this.head) return undefined;
        let current = this.head;
        let newTail = this.head; //Use multiple pointer approach 

        while (current.next) { //Move until we reach tail
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;

        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    shift() {
        //Remove a node from the beginning of a LinkedList
        if (!this.head) return null;
        var removedNode = this.head;
        this.head = removedNode.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return removedNode;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    get(idx) {
        if (idx < 0 || idx > this.length) return null;
        let count = 0;
        var currentNode = this.head;
        while (currentNode.next && count != idx) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    set(idx, val) {
        if (idx < 0 || idx > this.length) return null;
        let count = 0;
        var currentNode = this.head;
        while (currentNode.next && count != idx) {
            currentNode = currentNode.next;
            count++;
        }
        currentNode.val = val;
        return this;
    }

    insert(idx, val) {

        if (idx < 0 || idx > this.length) return false;
        if (idx == this.length) {
            return !!this.push(val)
        } else if (this.length == 0) {
            return !!this.unshift(val)
        } else {
            var NN = new Node(val);
            var prevNode = this.get(idx - 1);
            var temp = prevNode.next;
            console.log(prevNode.next);
            NN.next = temp;
            prevNode.next = NN;
        }
        this.length++;
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === this.length) {
            return this.pop();
        }
        if (idx === 0) return this.shift();
        var prevNode = this.get(idx - 1);
        var currentNode = this.get(idx);
        prevNode.next = currentNode.next;
        this.length--;
        return currentNode;
    }

    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {

            next = node.next;
            node.next = prev;
            prev = node;
            node = next;

        }
        return this;
    }
}


var list = new LinkedList();
// list.push("A")
// list.push("B")
// list.push("C")
// list.unshift("X")
// list.push("Z");

// list.set(4, 19)
// list.insert(5, 3)
// list.insert(3, 21)
// console.log("******************")
// list.traverse();
// console.log("*******************");
// list.remove(3);
// list.traverse();
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.print();
list.reverse();
list.print();