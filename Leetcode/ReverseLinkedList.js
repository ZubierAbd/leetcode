//Given the head of a linkedList, reverse the linkedList and return the reversed list

// Single Linked List Class
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

function reverse(head) {
    let node = head;
    previous;
    temp;

    while (node) {
        //Save temp before we overwrite node.next;
        tmp = node.next;

        node.next = previous;

        previous = node;
        node = temp;
    }

    return previous;
}