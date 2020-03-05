class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    //   If the stack is empty then the node will be the top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    // If the stack already has something, then create a new Node, add data to the node, have the pointer point to the top

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top; //start at the top
    this.top = node.next; // set the top to the next node
    return node.data; // return the data from the first "top"?
  }
}

const starTrek = new Stack();

starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("Mcoy");
starTrek.push("Scotty");

console.log(starTrek);
