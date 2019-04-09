// CHALLENGE 2: VALIDATE A PALINDROME
// Return TRUE if palindrome, FALSE if not
// ex. isPalindrome('racecar') === true, isPalindrome('hello') == false

// initial solution
// function isPalindrome(str) {
//   // lower case to equalize the input/output
//   // split to get an array
//   // reduce to swap/reverse characters
//   return (
//     str
//       .toLowerCase()
//       .split("")
//       .reduce((char, nextChar) => nextChar + char) === str
//   );
// }

// more verbose solution using reverse and join
// function isPalindrome(str) {
//   return (
//     str
//       .toLowerCase()
//       .split("")
//       .reverse()
//       .join("") === str
//   );
// }
