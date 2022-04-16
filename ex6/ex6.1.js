str1 = "adsafdf";

function accum(str) {
  let newArray = [];

  for (let i = 0; i < str.length; i++) {
    newArray.push(format(str[i], i + 1));
  }
  return newArray.join("-");
}
function format(str, num) {
  let letter = str.toUpperCase();
  while (letter.length !== num) {
    letter += str.toLowerCase();
  }
  return letter;
}
console.log(accum(str1));
