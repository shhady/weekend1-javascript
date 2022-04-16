// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
// also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the
// parameter is positive.
// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

var findNextSquare = function (num) {
  return Math.sqrt(num) % 1 === 0;
};

//2nd: loop through all the number from 1 to num
var findNextSquare = function (num) {
  for (let i = 1; i <= num; i++) {
    let d = i * i;
    if (d === num) {
      return d;
    }
  }
};
// Optimize solution: Binary Search
var findNextSquare = function (num) {
  if (num == 1) return true;
  let left = 2;
  let right = Math.floor(num / 2);
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let sqr = middle * middle;
    if (sqr == num) {
      return Math.pow(Math.sqrt(sqr) + 1, 2);
    } else {
      if (sqr > num) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }

  return -1;
};
console.log(findNextSquare(121));
