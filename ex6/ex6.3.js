// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";

function organize(a, b) {
  let presence = "",
    Text = (a + b).toLowerCase();
  for (let char of Text) {
    //* adds only first time occurances of chars, no repeats
    if (presence.indexOf(char) === -1) {
      presence += char;
    }
  }
  return presence.split("").sort().join("");
}
console.log(organize(a, b));
