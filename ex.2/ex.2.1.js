// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

let arr1 = [19, 5, 42, 2, 77];
let arr2 = [10, 343445353, 3453445, 3453545353453];

let min = Infinity,
  secondMin = Infinity;
let sumOfLowest = (arr) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    } else if (arr[i] < secondMin) {
      secondMin = arr[i];
    }
  }
  return secondMin + min;
};
console.log(sumOfLowest(arr2));

//? second way

function byValue(a, b) {
  return a - b;
}
arr1.sort(byValue);
console.log(arr1[0] + arr1[1]);
