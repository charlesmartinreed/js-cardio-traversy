// Challenge 6: FIZZBUZZ
// Print all numbers from 1 - 100. For multiples of 3, instead of number, print 'Fizz', multiples of 5, print 'Buzz', multiples of 3 and 5 print 'FizzBuzz'

// function FizzBuzz() {
//   for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

function FizzUpTo(start, end) {
  if (parseInt(start) && parseInt(end)) {
    for (let i = start; i <= end; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  } else {
    console.error("enter numbers only please");
  }
}
