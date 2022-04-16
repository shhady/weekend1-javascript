// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the
// given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

let str1 = "Hello";
let str2 = "I";
const repeat = (n, str) => {
  for (let i = 0; i < n; i++) {
    console.log(str);
  }
};
repeat(2, str1);
