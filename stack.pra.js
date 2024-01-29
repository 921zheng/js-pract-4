function createStack(maxSize = 5) {
  const newStack = {};
  newStack.quantity = 0;
  newStack.maxSize = maxSize;
  newStack.push = push;
  return newStack;
}

function push(item) {
  if (this.maxSize > this.quantity) {
    this.items[this.quantity] = item;
  }
}

module.exports = createStack;
