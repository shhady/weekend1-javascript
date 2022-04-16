// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

let str1 = "String";
let str2 = "Weird string case";

const weird = (str) => {
  output = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      output += str[i].toUpperCase();
    } else {
      output += str[i].toLowerCase();
    }
  }
  return output;
};
console.log(weird(str2));
