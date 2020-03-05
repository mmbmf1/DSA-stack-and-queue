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

const peek = stack => {
  if (!stack.top) {
    console.log("This ain't the top");
    return;
  }
  console.log(`Top of stack: `, stack.top.data);
  return stack.top;
};

const isEmpty = stack => {
  if (!stack.top) {
    console.log("Stack empty");
    return true;
  }
  console.log("Stack not empty");
  return false;
};

const display = stack => {
  if (!stack.top) {
    console.log("No stack here");
    return;
  }

  let current = stack.top;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }

  return;
};

const starTrek = new Stack();

starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("Mcoy");
starTrek.push("Scotty");

// console.log(starTrek);

peek(starTrek);
isEmpty(starTrek);
display(starTrek);

// starTrek.pop();
// starTrek.pop();

// console.log(starTrek);
