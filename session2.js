// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string, if more than one longest word, put into an array

// returning just the longest word
// function longestWord(sen) {
//   return sen.split(" ").reduce((word, nextWord) => {
//     if (word.length > nextWord.length) {
//       return word;
//     } else if {
//       return nextWord;
//     }
//     return word;
//   });
// }

// using the Match method
// takes in a regExp, returns a filtered expression based

// function longestWord(sen) {
//   // make sure we only have letters and numbers
//   const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//
//   // sort by length
//   const sorted = wordArr.sort((word, nextWord) => {
//     // return word.length - nextWord.length; //ascending
//     return nextWord.length - word.length; //descending
//   });
//
//   //if multiple words, put into array
//   const longestWordArr = sorted.filter((word) => {
//     return word.length === sorted[0].length;
//   });
//
//   let returned =
//     longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
//
//   return returned;
// }

// slightly shortened refactor
function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  const sortedArr = wordArr.sort(
    (word, nextWord) => nextWord.length - word.length
  );

  const longestWordArr = sortedArr.filter(
    word => word.length === sortedArr[0].length
  );

  return longestWordArr === 1 ? longestWordArr[0] : longestWordArr;
}
