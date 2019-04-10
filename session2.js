// CHALLENGE 3: FLATTEN ARRAY
// Take array of arrays, flatten to single array

// using reduce
// function flattenArray(arrays) {
//   return arrays.reduce((a, b) => {
//     return a.concat(b);
//   });
// }

// using the built in flat() method
// function flattenArray(arrays) {
//   // default deepness of nested array is 1
//   return arrays.flat();
// }

// using the apply method
// function flattenArray(arrays) {
// 	// apply takes a 'this' and an array of elements
//   return [].concat.apply([], arrays);
// }

// using the spread operator
// allows an iterable to be expanded into multiple args
// function add(a, b, c) {
//   return a + b + c;
// }
//
// var arr = [1, 2, 3];
// add(...arr); //6 - spread allows us to treat the contents of the array as individual args

function flattenArray(arrays) {
  return [].concat(...arrays);
}
