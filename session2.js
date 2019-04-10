// CHALLENGE 5: LETTER CHANGES
// Change every letter of string to the one that follows it and capitalize the vowels - Z becomes A
// 'hello there' -> 'Ifmmp UIfsf'

// my basic, not quite there solution
// function letterChanges(str) {
//   // Z is 90
//   let returnString = "";
//   let vowels = ["a", "e", "i", "o", "u"];
//
//   for (letter of str.toLowerCase()) {
//     let nextLetter = "";
//
//     if (letter === "z") {
//       letter = "A";
//     } else if (letter !== "z") {
//       // increment the unicode number
//       let unicodeValue = letter.charCodeAt(0);
//       nextLetter = String.fromCharCode(unicodeValue + 1);
//     }
//
//     if (vowels.includes(nextLetter)) {
//       nextLetter = nextLetter.toUpperCase();
//     }
//
//     returnString += nextLetter;
//   }
//   return returnString;
// }

// much shorter example
// function letterChanges(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//
//   let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
//     let nextLetter = String.fromCharCode(char.charCodeAt() + 1);
//     if (char === "z") {
//       return "a";
//     } else if (vowels.includes(nextLetter)) {
//       return nextLetter.toUpperCase();
//     } else {
//       return nextLetter;
//     }
//   });
//
//   return newStr;
// }

// even shorter, using another regExp
function letterChanges(str) {
  let newStr = str
    .toLowerCase()
    .replace(/[a-z]/gi, char =>
      char === "Z" ? "a" : String.fromCharCode(char.charCodeAt() + 1)
    );

  // regExp for vowels
  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

  return newStr;
}
