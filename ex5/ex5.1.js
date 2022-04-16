// Ex5.1 - trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.

str = "Hello my name is Shhady";
str1 = "hola amigos";

const char = (str) => {
  return str.slice(1, -1, str.length);
};
console.log(char(str1));
