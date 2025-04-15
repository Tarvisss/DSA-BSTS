class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    //if the root doesnt have a node then we create one. a tree must start somewhere
    if (this.root === null) {
      this.root = new Node(val)
      return this;
    }
    // create a new node with the givin value
    // We don’t insert raw values — we insert nodes. Each node has structure (value + left/right) that’s essential for the tree.
    const newNode = new Node(val);
    // this is a pointer which begins transveral from the root of the tree
    let current = this.root;
      
    while (true) {
      //here i'm choosing to go left
      if (val < current.val) {
        if (current.left === null){
          current.left = newNode;
          return this;
        } else {
          current = current.left
        } 

      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
    
  

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    this.root = this.insertNode(this.root, val);
    return this;
    }
    //helper function
     insertNode(current, val) {
      // BASE CASE: if current node is epmty return here
      if (current === null){
        return new Node(val)
      }
       // Recursive case: decide to go left or right based on the value
      if (val < current.val){
        current.left = this.insertNode(current.left, val)
      } else {
      // Insert into the right subtree
        current.right = this.insertNode(current.right, val);
      }
      // return the current node back up the recursion chain
      return current;
    }
  

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
  
    let currentNode = this.root;

    while( currentNode !== null) {

      if(val === currentNode.val){
        return currentNode
      }

      if (val < currentNode.val){
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

    // if the tree is empty return undefined
    if(this.root === null){
      return undefined;
    }
    return this.findNode(this.root, val)
  }

    // make up fucking variables out of thin air and just know magically that youll need to pass them into your helper function FUCK!
    findNode(currentNode, val) {
      if (currentNode === null) {
        return undefined;
      }
      if(currentNode.val === val) {
        return currentNode;
      }
      if (val < currentNode.val){
        return this.findNode(currentNode.left, val);

      } else {
        return this.findNode(currentNode.right, val)
      }
    }
  

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

// Method to perform Depth-First Search (DFS) using Pre-Order Traversal
dfsPreOrder() {
  // Step 1: Initialize an empty array to hold the values of visited nodes
  const results = [];

  // Step 2: Check if the tree is empty (i.e., no root node)
  // If it is, return the empty array immediately since there's nothing to traverse
  if (this.root === null) {
    return results;
  }

  // Step 3: Call the helper method to begin traversal from the root node
  // Pass the current node (this.root) and the results array to store visited node values
  this.traverseDFSPreorder(this.root, results);

  // Step 4: After traversal is complete, return the array of node values in pre-order
  return results;
}

// Helper method to recursively traverse the tree in pre-order
traverseDFSPreorder(currentNode, results) {
  // Base Case: If the current node is null (i.e., no node to process), return to stop recursion
  if (currentNode === null) {
    return;
  }

  // Step 1: "Visit" the current node by adding its value to the results array
  // This is the key step that makes this a "pre-order" traversal:
  // We process the current node *before* its children
  results.push(currentNode.val);

  // Step 2: Recursively traverse the left subtree
  // This continues the traversal down the left side of the tree,
  // visiting all left descendants before moving to the right side
  this.traverseDFSPreorder(currentNode.left, results);

  // Step 3: Recursively traverse the right subtree
  // After finishing the left side, this moves to the right side of the current node
  this.traverseDFSPreorder(currentNode.right, results);
}


  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const results = [];

    if (this.root === null){
      return results
    }

    // this is where i'll call the helper function
    this.traverseDFSInorder(this.root, results)

    return results;
  }

  traverseDFSInorder(currentNode, results ){
    if (currentNode === null)
      return;

    this.traverseDFSInorder(currentNode.left, results)

    results.push(currentNode.val)

    this.traverseDFSInorder(currentNode.right, results)
  }

  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

    const results = [];

    if (this.root === null){
      return results;
    }

    // this is where i'll call the helper function
    this.traverseDFSPostorder(this.root, results)

    return results;
  }

  traverseDFSPostorder(currentNode, results ){
    if (currentNode === null)
      return;

    this.traverseDFSPostorder(currentNode.left, results)

    

    this.traverseDFSPostorder(currentNode.right, results)

    results.push(currentNode.val)
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
     const results = []
     let queue = [this.root];
    while(queue.length){
      let currentNode = queue.shift();
      results.push(currentNode.val);
      if(currentNode.left){
        queue.push(currentNode.left)
      } 
      
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return results;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */
///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////
  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
