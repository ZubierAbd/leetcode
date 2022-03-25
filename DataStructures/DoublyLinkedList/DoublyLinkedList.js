class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.null = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    print() {
        var current = this.head;
        var arr = [];
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    show() {
        var current = this.head;
        while (current) {
            console.log({
                val: current.val,
                next: current.next,
                prev: current.prev
            })
            current = current.next
        }
    }

    pop() {
        //Remove a node from the end of a linkedList

        if (!this.head) return undefined;

        var removedNode = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length--;
        return removedNode;

    }

    shift() {
        //Remove node from beginning of a Doubly LinkedList
        if (!this.head) return undefined;
        var removedNode = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }

    unshift(val) {
        //Add a node at the beginning of a doublyLinkedList
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        var oldHead = this.head;
        oldHead.prev = newNode; //Set reverse direction 
        newNode.next = oldHead; //Set forward direction 
        this.head = newNode;//Update head;
        this.length++;
        return this;
    }
}

var listy = new DoublyLinkedList();
listy.push(1);
listy.push(2);
listy.push(3);
listy.push(4)
listy.print()
listy.show();
listy.pop();
listy.print();
listy.shift();
listy.print();