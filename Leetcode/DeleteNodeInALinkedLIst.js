function ListNode(val) {
    this.val = val;
    this.next = null;
}

function deleteNode(node) {
    node.val = node.next.val;
    node.next = node.next.next
}
