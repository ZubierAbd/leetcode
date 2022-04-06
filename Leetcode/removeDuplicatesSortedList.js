function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var deleteDuplicates = function (head) {
    var current = head;

    while (current) {
        while (current.next && current.next.val === current.val) {
            current.next = current.next.next;
        }
        current = current.next;
    }

    return head;

}