function convertSortedArrayToBST(nums) {

    function helper(left, right, nums) {
        if (left > right) return null;
        const mid = Math.floor(left + right / 2);
        const node = new TreeNode(nums[mid]);
        node.val = nums[mid];
        node.left = helper(left, mid - 1, nums);
        node.right = helper(mid + 1, right, nums);
        return node
    }

    return helper(0, nums.length - 1, nums);

}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


console.log()