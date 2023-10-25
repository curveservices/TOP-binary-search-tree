//Create a Node class/factory with data, left, and right attributes.
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
//Create a Tree class/factory that has a 'root' att 
class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }
    //Write a buildTree function which takes an accepts an 
    //array of data and builds a balanced binary tree.
    buildTree(arr) {}

    //Implement insert which accepts a value
    insert(value) {}

    //Implement delete which accepts a value
    delete(value) {}

    deleteNode(node, value) {}

    //Write a find() which accepts a value and returns the node with the given value.
    find(value) {}

    findNode(node, value) {}

    //Write a levelOrder function which accepts another function as a parameter. 
     //levelOrder should traverse the tree in breadth-first level order and provide each node as the argument to the provided function. 
    //This function can be implemented using either iteration or recursion 
    levelOrder(callback) {}
   
    //Write an inOrder() that accepts a function parameter. 
    //Each of these functions should traverse the tree in their respective depth-first order 
    //& yield each node to the provided function given as an argument. 
    //The functions should return an array of values if no function is given.
    inOrder(callback) {}

    inorderTraversal(node, result, callback) {}

    //Write preorder() that accepts a function parameter. 
    //Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. 
    //The functions should return an array of values if no function is given.
    preorder(callback) {}

    preorderTraversal(node, result, callback) {}

    //Write postorder() that accepts a function parameter. 
    //Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. 
    //The functions should return an array of values if no function is given.
    postorder(callback) {}

    postorderTraversal(node, result, callback) {}

    //Write height() to accept a node and returns its height. 
    //Height is defined as the number of edges in longest path from a given node to a leaf node.
    height(node) {}

    //Write depth() to accept a node and returns its depth. 
    //Depth is defined as the number of edges in path from a given node to the tree’s root node.
    depth(node) {}

    //Write a isBalanced() which checks if the tree is balanced. 
    //A balanced tree is one where the difference between heights of left 
    //subtree and right subtree of every node is not more than 1.
    isBalanced() {}

    checkBalance(node) {}

    //Write a rebalance() which rebalances an unbalanced tree. 
    //use a traversal method to provide a new array to the buildTree function.
    rebalance() {}
}

//Tie it all together
//Write a driver script to test the tree operations.
//Driver script

//Create a binary search tree from an array of random numbers < 100. 
//Create a function that returns an array of random numbers every call


function generateRandomNumbers(num) {}

//Confirm tree is balanced by calling isBalanced()

//Print out all elements in level, pre, post, and in order.
  
//Unbalance the tree by adding numbers > 100

//Confirm tree is unbalanced by calling isBalanced.
  
//Rebalance the tree by calling rebalance()

//Confirm tree is balanced by calling isBalanced()

//Print out all elements in level, pre, post, and in order.

  
  