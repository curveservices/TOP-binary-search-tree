//Create a Node class/factory with data, left, and right attributes.
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

//Create a Tree class/factory that has a 'root' att 
class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }
    //Write a buildTree function which takes an accepts an 
    //array of data and builds a balanced binary tree.
    buildTree(arr) {
        //sort & remove duplicates
        const sortedUniqueArr = [...new Set(arr)].sort((a,b) => a-b);
        //base case
        if (arr.length === 0) return null;
        const mid = Math.floor(sortedUniqueArr.length /2);
        const node = new Node(sortedUniqueArr[mid]);

        node.left = this.buildTree(sortedUniqueArr.slice(0, mid));
        node.right = this.buildTree(sortedUniqueArr.slice(mid + 1));
        return node;
    }
    //Implement insert which accepts a value
    insert(value) {
        this.root = this.insertNode(this.root, value);
    }
    insertNode(node, value) {
        if (!node) return new Node(value);
        if (value < node.data) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.data) {
            node.right = this.insertNode(node.right, value)
        }
        return node;
    }
    //Implement delete which accepts a value
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if (!node) return null;
        if (value < node.data) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.data) {
            node.right = this.deleteNode(node.right, value);
        } else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            const minRight = this.findMin(node.right);
            node.data = minRight.data;
            node.right = this.deleteNode(node.right, minRight.data);
        }
        return node;
    }

    finMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    //Write a find() which accepts a value and returns the node with the given value.
    find(value) {
        this.root = this.findNode(this.root, value);
    }

    findNode(node, value) {
        //Return node if null or matches value
        if (!node) return null;
        if (value === node.data) return node;
        // Access node's children if value not found
        if (value < node.data) return this.findNode(node.left, value);
        if (value > node.data) return this.findNode(node.right, value);
    }

    //Write a levelOrder function which accepts another function as a parameter. 
     //levelOrder should traverse the tree in breadth-first level order and provide each node as the argument to the provided function. 
    //This function can be implemented using either iteration or recursion 
    levelOrder(callback) {
        if (!this.root) return [];

        const result = [];
        const queue = [this.root];
        //loop
        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current.data);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            if (callback) callback(current);
        }
        return result
    }
   
    //Write an inOrder() that accepts a function parameter. 
    //Each of these functions should traverse the tree in their respective depth-first order 
    //& yield each node to the provided function given as an argument. 
    //The functions should return an array of values if no function is given.
    inOrder(callback) {
        const result = [];
        this.inorderTraversal(this.root, result, callback);
        return result;
    }

    inorderTraversal(node, result, callback) {
        if (!node) return;
        //Traverse left subtree
        this.inorderTraversal(node.left, result, callback);
        result.push(node.data);
        //Travers right subtree
        if (callback) callback(node);
        this.inorderTraversal(node.right, result, callback);
    }

    //Write preorder() that accepts a function parameter. 
    //Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. 
    //The functions should return an array of values if no function is given.
    preorder(callback) {
        const result = [];
        this.preorderTraversal(this.root, result, callback);
        return result;
    }

    preorderTraversal(node, result, callback) {
        if (!node) return;

        result.push(node.data);
        if (callback) callback(node);
        this.preorderTraversal(node.left, result, callback);
        this.preorderTraversal(node.right, result, callback);
    }
    //Write postorder() that accepts a function parameter. 
    //Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. 
    //The functions should return an array of values if no function is given.
    postorder(callback) {
        const result = [];
        this.postorderTraversal(this.root, result, callback);
        return result;
    }

    postorderTraversal(node, result, callback) {
        if (!node) return;

        this.postorderTraversal(node.left, result, callback);
        this.postorderTraversal(node.right, result, callback);
        result.push(node.data);
        if (callback) callback(node);
    }
    //Write height() to accept a node and returns its height. 
    //Height is defined as the number of edges in longest path from a given node to a leaf node.
    height(node) {
        if (!node) return -1;
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    //Write depth() to accept a node and returns its depth. 
    //Depth is defined as the number of edges in path from a given node to the tree’s root node.
    depth(node) {
        if (!node) return 0;
        let depth = 0;
        let current = node;
        while (current) {
            depth++;
            current = current.parent;
        }
        return depth;
    }
    //Write a isBalanced() which checks if the tree is balanced. 
    //A balanced tree is one where the difference between heights of left 
    //subtree and right subtree of every node is not more than 1.
    isBalanced() {
        return this.checkBalance(this.root);
    }

    checkBalance(node) {
        if (!node) return true;

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        return this.checkBalance(node.left) && this.checkBalance(node.right);
    }
    //Write a rebalance() which rebalances an unbalanced tree. 
    //use a traversal method to provide a new array to the buildTree function.
    rebalance() {
        const data = this.inOrder();
        this.root = this.buildTree(data);
    }
}

//Tie it all together
//Write a driver script to test the tree operations.
//Driver script

//Create a binary search tree from an array of random numbers < 100. 
//Create a function that returns an array of random numbers every call
const randomNumbers = generateRandomNumbers(6);
const tree = new Tree(randomNumbers);

function generateRandomNumbers(num) {
    const randomNumbers = [];
    for (let i = 0; i < num; i++) {
      randomNumbers.push(Math.floor(Math.random() * 100));
    }
    return randomNumbers;

}
//Confirm tree is balanced by calling isBalanced()
console.log("Is the tree balanced:", tree.isBalanced());

//Print out all elements in level, pre, post, and in order.
console.log("Level order traversal:", tree.levelOrder());
console.log("Preorder traversal:", tree.preorder());
console.log("Postorder traversal:", tree.postorder());
console.log("Inorder traversal:", tree.inOrder());
  
//Unbalance the tree by adding numbers > 100
tree.insert(110);
tree.insert(120);
console.log('Tree has been unbalanced', tree.inOrder())

//Confirm tree is unbalanced by calling isBalanced.
console.log("Is the tree balanced (after unbalancing):", tree.isBalanced());
  
//Rebalance the tree by calling rebalance()
tree.rebalance();

//Confirm tree is balanced by calling isBalanced()
console.log("Is the tree balanced (after rebalancing):", tree.isBalanced());

//Print out all elements in level, pre, post, and in order.
console.log("Level order traversal (after rebalancing):", tree.levelOrder());
console.log("Inorder traversal (after rebalancing):", tree.inOrder());
console.log("Preorder traversal (after rebalancing):", tree.preorder());
console.log("Postorder traversal (after rebalancing):", tree.postorder());
