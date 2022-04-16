// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

let arr1 = [1, 1, 1, 2, 1, 1];
let arr2 = [0, 0, 0.55, 0, 0];
let Unique = (arr) => {
  var unique = arr.filter((v, i, a) => a.indexOf(v));
  return unique;
};
console.log(Unique(arr2));
