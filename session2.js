// CHALLENGE 4: ANAGRAM
// Two strings passed in, return TRUE if anagram, FALSE if not

// my basic solution
// function isAnagram(str1, str2) {
//   var str1Arr = str1.split("");
//   var isAnagram = "false";
//
//   for (letter of str2) {
//     // console.log(letter);
//     if (str1Arr.indexOf(letter) != -1) {
//       isAnagram = true;
//     } else {
//       isAnagram = false;
//     }
//   }
//
//   return isAnagram;
// }

// more complicated solution, with helper function sanitizing the string
// function isAnagram(str1, str2) {
//   return formatStr(str1) === formatStr(str2);
// }
//
// function formatStr(str) {
//   // strip out anything that isn't a word character (spaces, characters like ! or #, not numbers), replace with empty string
//   // sort puts it in order from earliest letter to the latest
//   // join takes our array and gives us a string
//   return str
//     .replace(/[^\w]/g, "")
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join("");
// }
