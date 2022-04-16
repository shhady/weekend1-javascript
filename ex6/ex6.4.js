// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false

let str = "aba";
let str1 = "Dermatoglyphics";

const isogram = (text) => {
  let result = "";
  let newText = text.toLowerCase();
  for (let i of newText) {
    if (result.indexOf(i) === -1) {
      result += i;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isogram(str1));
