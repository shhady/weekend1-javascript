// // Ex5.7 - shortest words
// // Simple, given a string of words, return the length of the
// shortest word(s).
// // String will never be empty and you do not need to account
//  for different data types.

let str1 = "Hello my name is Shhady and I learn programming";

let findShortest = (str) => {
  let words = str.split(" ");
  let shortest = words[0].length;
  let next;
  for (let i = 0; i < words.length; i++) {
    next = words[i].length;
    if (shortest > next) shortest = next;
  }
  return shortest;
};
console.log(findShortest(str1));
