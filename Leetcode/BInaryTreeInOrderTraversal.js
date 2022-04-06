function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


function inOrder(root) {
    let result = [];
    dfs(root);

    function dfs(root) {
        if (root !== null) {
            dfs(root.left);
            result.push(root.val);
            dfs(root.right);
        }
    }

    return result;
}