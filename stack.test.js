createStack = require("./stack");

describe("createStack", () => {
  test("A quantity property which has an initial value of 0 and represents the number of items currently in the stack storage.", () => {
    const testStack = createStack();
    expect(testStack.quantity).toBe(0);
  });
  test("A storage property, which is initially set to an empty object", () => {
    expect(typeof createStack()).toBe("object");
  });

  test("A maxSize property, will be passed as an argument when creating the stack", () => {
    const testStack = createStack(5);

    expect(testStack.maxSize).toBe(5);
  });

  test("A maxSize property, when no argument is passed it uses a default value", () => {
    const testStack = createStack();

    expect(testStack.maxSize).toBe(5);
  });

  test("A push method, which adds items to the stack storage, provided the stack is not already full.", () => {
    const testStack = createStack(1);

    testStack.addItem("apple");
    expect(testStack.items).toEqual({ 1: "apple" });
  });

  test("two stacks storage, provided the stack is not already full.", () => {
    const testStack = createStack(5);

    testStack.addItem("apple");
    testStack.addItem("orange");
    expect(testStack.items).toEqual({ 1: "apple", 2: "orange" });
  });
  test("addItem does not work when the stack is full", () => {
    const testStack = createStack(1);

    testStack.addItem("apple");
    testStack.addItem("orange");
    expect(testStack.items).toEqual({ 1: "apple" });
  });

  test(".pop() - when there is one item, pop returns the item", () => {
    const testStack = createStack(1);

    testStack.addItem("apple");

    expect(testStack.pop()).toEqual("apple");
  });

  test(".pop() - when there is one item, pop delete the item", () => {
    const testStack = createStack(1);

    testStack.addItem("apple");
    testStack.pop();
    expect(testStack.items).toEqual({});
  });

  test(".pop() - when items gets removed with pop, quantity decreases by one each time", () => {
    const testStack = createStack(3);

    testStack.addItem("apple");
    expect(testStack.quantity).toEqual(1);
    testStack.pop();
    expect(testStack.quantity).toEqual(0);
  });
  test(".pop() - when multiple items are in storage, only the last item will be removed", () => {
    const testStack = createStack(3);

    testStack.addItem("apple");
    testStack.addItem("orange");
    testStack.pop();
    expect(testStack.items).toEqual({ 1: "apple" });
  });

  test(".isEmpty() - when storage is empty, returns true", () => {
    const testStack = createStack(3);
    expect(testStack.isEmpty()).toBe(true);
  });

  test(".isEmpty() - when storage is not empty, returns false", () => {
    const testStack = createStack(3);
    testStack.addItem("apple");
    expect(testStack.isEmpty()).toBe(false);
  });

  test(".isFull() - when storage is not full, returns false", () => {
    const testStack = createStack(3);

    expect(testStack.isFull()).toBe(false);
  });
  test(".isFull() - when storage is  full, returns true", () => {
    const testStack = createStack(1);
    testStack.addItem("apple");
    expect(testStack.isFull()).toBe(true);
  });

  test(".peek() - if empty, return empty string", () => {
    const testStack = createStack(1);

    expect(testStack.peek()).toBe("");
  });
  test(".peek() - if item is in storage, return the last added item", () => {
    const testStack = createStack(2);
    testStack.addItem("apple");
    testStack.addItem("orange");
    expect(testStack.peek()).toBe("orange");
  });

  test(".peek() - if item is in storage, return the last added item", () => {
    const testStack = createStack(2);
    testStack.addItem("apple");
    testStack.addItem("orange");
    expect(testStack.peek()).toBe("orange");
  });
});
