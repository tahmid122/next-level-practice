// * Array Implementation
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.unshift(value);
  }
  dequeue(value) {
    if (this.isEmpty()) return undefined;
    return this.items.shift(value);
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log("Start ->" + this.items.join(" -> ") + "->End");
  }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
console.log(queue.peek());
queue.print();
