// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized

// simple for-loop
// function capitalizeLetters(str) {
//   const strArr = str.toLowerCase().split(" ");
//
//   for (let i = 0; i < strArr.length; i++) {
//     // take the first letter, uppercase it, add the rest of the substring, from index 1 forward
//     strArr[i] =
//       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//   }
//
//   return strArr.join(" ");
// }

// using map
// function capitalizeLetters(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map(word => word[0].toUpperCase() + word.substr(1))
//     .join(" ");
// }

// using regEx
function capitalizeLetters(str) {
  // regEx need to be within / /
  // /b is word boundary, [a-z] is alpha from a-z, g for global, i for case insensitive
  // second param is a function
  return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

// // CHALLENGE 5: MAX CHARACTER
// // Return the character that is most common in a string
// // ex: maxCharacter('javascript') == 'a'
//
// function maxCharacter(str) {
//   let characters = {};
//
//   for (let char in str) {
//     if (!characters[str[char]]) {
//       characters[str[char]] = 1;
//     } else {
//       characters[str[char]] += 1;
//     }
//   }
//
//   return Object.keys(characters).reduce((acc, next) => {
//     let val = characters[acc];
//     return val;
//   });
// }
