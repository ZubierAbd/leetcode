class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

function createNewNode(key) {
    temp = new Node();
    temp.data = key;
    temp.next = null;
    return temp;
}

function printList(node) {
    while (node != null) {
        console.log(node.data + " ")
        node = node.next;
    }
}

function merge(h1, h2) {
    if (h1 == null) {
        return h2
    }
    if (h2 == null) {
        return h1
    }


}