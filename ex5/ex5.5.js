// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly
//  takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

let str1 = "Shhady Serhan";
let str2 = "Sam Harris";
let str3 = "patrick Feeney";

// const two = (str) => {
//   output = str
//     .split(" ")
//     .map((word) => word[0])
//     .join(".");
//   return output;
// };
// console.log(two(str1));

function getFirstLetters(str) {
  const firstLetters = str
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");

  return firstLetters;
}

console.log(getFirstLetters(str3));
