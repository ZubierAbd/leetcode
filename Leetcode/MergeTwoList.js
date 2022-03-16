
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/*Given two sorted lists, merge the two lists to one sorted list and return head of sorted list */
// Key questiosn - if both values are same, does it matter which list we go to? 

class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }


    addToTheLast(node) {
        if (this.head === null) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
                temp.next = node;
            }
        }
    }

    printList() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data + " ");
            temp = temp.next;
        }
    }
}

function sortedMerge(headA, headB) {
    let dummyNode = new Node(0)
    let tail = dummyNode;
    while (true) {
        /* if either list runs out,
            use the other list */

        if (headA == null) {
            tail.next = headB;
        }

        if (headB === null) {
            tail.next = headA;
        }

        /*Compare the two data values for each list and append it to tail  */
        /* Then advance head to next Node */
        if (headA.data <= headB.data) {
            tail.next = headA;
            headA = headA.next;
        } else {
            tail.next = headB;
            headB = headB.next;
        }

        /*Advance the tail */
        tail = tail.next;
    }
    return dummyNode.next;
}

let llist1 = new LinkedList();
let llist2 = new LinkedList();

// Node head1 = new Node(5);
llist1.addToTheLast(new Node(5));
llist1.addToTheLast(new Node(10));
llist1.addToTheLast(new Node(15));

// Node head2 = new Node(2);
llist2.addToTheLast(new Node(2));
llist2.addToTheLast(new Node(3));
llist2.addToTheLast(new Node(20));

console.log(llist1)

llist1.printList();