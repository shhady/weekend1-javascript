// Ex2.7 - Basic Math
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7) // Output: 11
// basicOp('-', 15, 18) // Output: -3
// basicOp('*', 5, 5) // Output: 25
// basicOp('/', 49, 7) // Output: 7

let basicOp = function (op, val1, val2) {
  if (op === "+") {
    return val1 + val2;
  } else if (op === "-") {
    val1 - val2;
  } else if (op === "*") {
    return val1 * val2;
  } else if (op === "/") {
    val1 / val2;
  }
};
console.log(basicOp("+", 1, 5));
