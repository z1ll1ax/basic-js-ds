const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.queue = null;
    this.start = null;
  }
  getUnderlyingList() {
    return this.start;
  }
  enqueue(value) {
    let newNode = new ListNode(value);
    if (!this.start) this.start = newNode;
    else this.queue.next = newNode;
    this.queue = newNode;
  }
  dequeue() {
    if (!this.start) return null;
    let value = this.start.value;
    this.start = this.start.next;
    if(!this.start) this.queue = null;
    return value;
  }
}

module.exports = {
  Queue
};
