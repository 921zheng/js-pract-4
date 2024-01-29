// function createStack(maxSize = 5) {
//   const newStack = {};
//   newStack.quantity = 0;
//   newStack.maxSize = maxSize;
//   newStack.items = {};
//   newStack.addItem = addItem;
//   newStack.pop = pop;
//   newStack.isEmpty = isEmpty;
//   newStack.isFull = isFull;
//   newStack.peek = peek;
//   return newStack;
// }
const createStack = (maxSize = 5) => {
  const newStack = Object.create(stackPrototype);
  newStack.quantity = 0;
  newStack.maxSize = maxSize;
  newStack.items = {};

  return newStack;
};

const stackPrototype = {
  addItem: function addItem(item) {
    if (this.maxSize > this.quantity) {
      this.quantity++;
      this.items[this.quantity] = item;
    }
  },
  pop: function pop(item) {
    const itemToReturn = this.items[this.quantity];
    delete this.items[this.quantity];
    this.quantity--;
    return itemToReturn;
  },

  isEmpty: function isEmpty() {
    if (this.quantity === 0) {
      return true;
    }
    return false;
  },

  isFull: function isFull() {
    if (this.quantity === this.maxSize) {
      return true;
    }
    return false;
  },

  peek: function peek(items) {
    if (this.quantity !== 0) {
      return this.items[this.quantity];
    } else return "";
  },
};

// function addItem(item) {
//   if (this.maxSize > this.quantity) {
//     this.quantity++;
//     this.items[this.quantity] = item;
//   }
// }

// function pop(item) {
//   const itemToReturn = this.items[this.quantity];
//   delete this.items[this.quantity];
//   this.quantity--;
//   return itemToReturn;
// }

// function isEmpty() {
//   if (this.quantity === 0) {
//     return true;
//   }
//   return false;
// }

// function isFull() {
//   if (this.quantity === this.maxSize) {
//     return true;
//   }
//   return false;
// }

// function peek() {
//   return "";
// }

module.exports = createStack;
