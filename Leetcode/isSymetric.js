var isSymmetric = root => {
    //Check if left is there and right is there 
    if (!root.left && root.right) return false; //Returns false since one side is there and the other is not
    if (root.left && !root.right) return false;
    if (!root.left && !root.right) return true;

}