function isTreeSame(p, q) {
    if (!p && !q) return true; //Both of them are null 

    if (!p || !q) return false; //If one is null, tree diff

    if (p.val !== q.val) return false;  //Compare value at this level

    if (!isTreeSame(p.left, q.left)) return false;

    if (!isTreeSame(p.right, q.right)) return false;

    return true;
}