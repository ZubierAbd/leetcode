function BSTPreOrder(root) {
    let visited = [];
    let current = root;
    helper(current)

    function helper(node) {
        visited.push(node.value);
        if (node.left) {
            helper.push(node.left)
        }
        if (node.right) {
            helper.push(node.right)
        }
    }
}