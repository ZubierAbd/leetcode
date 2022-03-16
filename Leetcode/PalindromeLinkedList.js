/*Given a linkedList, find out if it is a palindrome or not i.e. last value of list is equal to first value and so on */
/*
One way to do this problem is to reverse the linkedList, create a new one and compare both 
This adds unnecessary complexity to the problem and is like trying to use a shotgun to hit an ant 
Another way to do it is in one pass use a two pointer approach 
First pass, the pointer goes through the list and finds the last one but the problem is that we can't use it since the second last one doesnt' have the prev
This approach would be feasible in a doubly linked list
So lets go with first approach

*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var one = new Node(1)
var two = new Node(2)
var three = new Node(3)
var four = new Node(4)
var five = new Node(3)
var six = new Node(2);
var seven = new Node(1);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = seven;

function isPalindrome(head) {
    var slow = head;
    var isPalin = true;
    var stack = [];

    //Traverse list once to populate stack 
    while (slow != null) {
        stack.push(slow.val)
        slow = slow.next;
    }


    //Now check if palindrome
    while (head != null) {
        var i = stack.pop();
        if (head.val == i) {
            isPalin = true;
        } else {
            isPalin = false;
            break;
        }
        head = head.next;
    }

    return isPalin;
}

console.log(isPalindrome(one))
