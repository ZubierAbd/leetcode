const RemoveNthNodeFromALinkedList = (head, n) => {

    //We have no way of knowing where the end of a linkedList is so we cannot treat it like an array where we know the length
    //of the list

    //we use a two pointer approach
    //First pointer is the fast pointer -> this goes to the end first
    //Second pointer is slow pointer -> this is n steps behind of the first pointer

    let slow = head;
    let fast = head;

    //Move fast pointer to the end of the list 
    for (var i = 0; i < n; i++) {
        if (fast.next === null) {
            if (i == n - 1) {
                head = head.next;
            }
            return head;
        }
        fast = fast.next;
    }

    //Now move both at same speed
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    //It will reach end and fast will be n steps ahead of slow

    //Delink the nth node from the list (slow)
    if (slow.next !== null) {
        slow.next = slow.next.next;
    }
    return head;

}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}