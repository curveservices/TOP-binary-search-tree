# Project: Binary Search Tree

## Live Demo 👉 [Binary search tree](https://curveservices.github.io/TOP-binary-search-tree/)

## PC View 👇

<img width="1045" alt="Screenshot 2023-10-26 at 13 29 03" src="https://github.com/curveservices/TOP-binary-search-tree/assets/101556296/3343746c-6be9-4e7b-a41f-fe81f6d170ed">

## Overview

[Project: Binary search tree](https://www.theodinproject.com/lessons/javascript-binary-search-trees) has been set as part of [The Odin Project](https://www.theodinproject.com/)

## Assets

- [This article](https://www.geeksforgeeks.org/sorted-array-to-balanced-bst/)
- [This video](https://www.youtube.com/watch?v=VCTP81Ij-EM)
- prettyPrint function from theOdinProject
```
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
```

## Obejective

1. Build a Node class / factory. It should have an attribute for the data it stores as well as its left and right children.
2. Build a Tree class / factory which accepts an array when initialized. The Tree class should have a root attribute which uses the return value of buildTree which you’ll write next.
3. Write a buildTree function which takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.
4. Write an insert and delete functions which accepts a value to insert/delete (you’ll have to deal with several cases for delete such as when a node has children or not). 
5. Write a find function which accepts a value and returns the node with the given value.
6. Write a levelOrder function which accepts another function as a parameter. levelOrder should traverse the tree in breadth-first level order and provide each node as the argument to the provided function. This function can be implemented using either iteration or recursion (try implementing both!).
7. Write inorder, preorder, and postorder functions that accept a function parameter. Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. The functions should return an array of values if no function is given.
8. Write a height function which accepts a node and returns its height. Height is defined as the number of edges in longest path from a given node to a leaf node.
9. Write a depth function which accepts a node and returns its depth. Depth is defined as the number of edges in path from a given node to the tree’s root node.
10. Write a isBalanced function which checks if the tree is balanced. A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.
11. Write a rebalance function which rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
12. Tie it all together
Write a simple driver script that does the following:

- Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it, if you wish.
- Confirm that the tree is balanced by calling isBalanced.
- Print out all elements in level, pre, post, and in order.
- Unbalance the tree by adding several numbers > 100.
- Confirm that the tree is unbalanced by calling isBalanced.
- Balance the tree by calling rebalance.
- Confirm that the tree is balanced by calling isBalanced.
- Print out all elements in level, pre, post, and in order.

## Extra

## Languages & Tools

<a href="https://javascript.info/"><img width="100" alt="Javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" /></a> <a href="https://html.com/html5/"><img width="100" alt="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" /></a> <a href="https://css3.com/"><img width="100" alt="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" /></a> <img width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          


***<a href="https://twitter.com/Crypto_Rozla"> Rozla-Dev </a> 26-10-2023***


[Back to top 👆](#project-binary-search-tree)