// // CHALLENGE 5: MAX CHARACTER
// // Return the character that is most common in a string
// // ex: maxCharacter('javascript') == 'a'

// using hash maps

// function maxCharacter(str) {
//   const charMap = {};
//   let maxChar = "";
//   let maxNum = 0;
//
//   str
//     .toLowerCase()
//     .split("")
//     .forEach(char => {
//       if (charMap[char]) {
//         charMap[char] += 1;
//       } else {
//         charMap[char] = 1;
//       }
//     });
//
//   // return the highest value using a for-in loop
//   // think for (let key in object)...
//   for (let char in charMap) {
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }
