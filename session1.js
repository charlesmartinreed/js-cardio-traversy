// REVERSE A STRING
// Return a string, in reverse
// ex. reverseString('hello') === 'olleh'

// function reverseString(str) {
//   let reversed = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// for-of loop version
// function reverseString(str) {
//   let reversed = "";
//   for (let char of str) {
//     //h, eh, leh, lleh, olleh
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// function reverseString(str) {
//   let reversed = "";
//   str.split("").forEach(char => (reversed = char + reversed));
//   return reversed;
// }

// cleaned up, split-reduce version
// function reverseString(str) {
//   return str.split("").reduce((acc, next) => next + acc);
// }

// function reverseString(str) {
//   // 1. turn the string into an array
//   let arr = str.split("");
//   // 2. You could just use the arr proto function, reverse()
//   arr.reverse();
//   // 3. Return as a string, using the arr proto function, join()
//   // return arr.join("");
//
//   // 4. alternatively, use reduce
//   return arr.reduce((arr, next) => {
//     return arr + next;
//   });
// }

// cleaned up version
// function reverseString(str) {
//   return str
//     .split("")
//     .reverse()
//     .reduce((arr, next) => {
//       return arr + next;
//     });
// }
