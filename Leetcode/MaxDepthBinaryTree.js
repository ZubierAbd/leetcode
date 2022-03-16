//Given a root, find the max depth of a binary tree 

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var maxDepth = root => {
    if (!root) return 0;
    let stack = [{ node: root, depth: 1 }]
    let depth = 0;
    while (stack.length) {
        //Take things off stack
        curr = stack.pop();
        currNode = curr.node;
        if (currNode.left) {
            stack.push({ node: currNode.left, depth: curr.depth + 1 })
        }
        if (currNode.right) {
            stack.push({ node: currNode.right, depth: curr.depth + 1 })
        }
        if (curr.depth > depth) {
            depth = curr.depth
        }
    }
    return depth;
}

var MaxDepthRecursive = root => {
    if (!root) return 0;
    return 1 + Math.max(de)
}