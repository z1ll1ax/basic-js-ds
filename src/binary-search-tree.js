const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) this.rootNode = new Node(data);
    else {
      let iterator = this.rootNode;
      while (iterator){
        if (data > iterator.data) {
          if (iterator.right === null){
            iterator.right = new Node(data);
            return;
          }
          iterator = iterator.right;
        }
        else {
          if (iterator.left === null){
            iterator.left = new Node(data);
            return;
          }
          iterator = iterator.left;
        }
      }
    }
  }

  has(data) {
    let iterator = this.rootNode;
    while (iterator){
      if (iterator.data === data) return true;
      else if (data > iterator.data) {
        iterator = iterator.right;
      }
      else {
        iterator = iterator.left;
      }
    }
    return false;
  }

  find(data) {
    let iterator = this.rootNode;
    while (iterator){
      if (iterator.data === data) return iterator;
      else if (data > iterator.data) {
        iterator = iterator.right;
      }
      else {
        iterator = iterator.left;
      }
    }
    return null;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(root, data){
    if (!root) return root;
    if (data < root.data) {
      root.left = this.removeNode(root.left, data);
    }
    else if (data > root.data) {
      root.right = this.removeNode(root.right, data);
    }
    else {
      if (!root.left && !root.right) return;
      if (!root.left) return root.right;
      if (!root.right) return root.left;
      let minNode = root.right;
      while (minNode.left) {
        minNode = minNode.left;
      }
      root.data = minNode.data;
      root.right = this.removeNode(root.right, minNode.data);
    }
    return root;
  }

  min() {
    if (!this.rootNode) return null;
    let iterator = this.rootNode;
    while (iterator.left){
      iterator = iterator.left;
    }
    return iterator.data;
  }

  max() {
    if (!this.rootNode) return null;
    let iterator = this.rootNode;
    while (iterator.right){
      iterator = iterator.right;
    }
    return iterator.data;
  }
}

module.exports = {
  BinarySearchTree
};