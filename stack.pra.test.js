createStack = require("./stack.pra");
describe("createstack", () => {
  test("stack should be an {}", () => {
    const testStack = createStack();

    expect(typeof createStack()).toBe("object");
  });
  test("when the stack is empty, it should return 0", () => {
    const testStack = createStack();

    expect(testStack.quantity).toBe(0);
  });
  test("maxSize should be 5", () => {
    const testStack = createStack(5);

    expect(testStack.maxSize).toBe(5);
  });

  test(".push() adds items to the stack storage, provided the stack is not already full", () => {
    const testStack = createStack(5);
    testStack.push("apple");
    expect(testStack.items).toEqual({ 1: "apple" });
  });
});
