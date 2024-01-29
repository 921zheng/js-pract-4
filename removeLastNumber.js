module.exports = removeLastNumber;
function removeLastNumber(arr) {
  if (arr.length === 1 || arr.length === 0) return [];
  if (arr.length > 1) {
    popped = arr.pop();
  }
  return arr;
}
