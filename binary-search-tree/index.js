// Binary Search Tree

/**
 * BST has the following characteristics:
 *      1) each node is a BST holds a key, a value, a left pointer, and a right pointer.
 *      2) the left and right pointers point to the left and right child nodes.
 *      3) each node has a parent unless it's the root node.
 */

class BinarySearchTree {
    constructor (key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
}

console.log(new BinarySearchTree());