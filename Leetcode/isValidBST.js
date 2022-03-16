function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isValidBST = function (root) {
    if (!root) return false;
    var stack = [{ node: root }];
    var answer = false;
    while (stack.length) {
        let currNode = stack.pop();
        if (currNode.left) {
            if (currNode.left.value >= currNode.value) {
                break;
            }
            stack.push(currNode.left)
        }
        if (currNode.right) {
            if (currNode.right.value <= currNode.value) {
                break;
            }
            stack.push(currNode.right)
        }
        answer = true;
    }
    return answer;
}

conso