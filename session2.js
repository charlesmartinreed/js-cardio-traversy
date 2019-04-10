// CHALLENGE 2: ARRAY CHUNKING
// SPLIT AN ARRAY INTO CHUNKED ARRAYS of a specific length

// using a while loop
function chunkArray(arr, length) {
  // init chunked array
  const chunkedArr = [];

  // set index
  let i = 0;

  // loop while index is less than array length
  while (i < arr.length) {
    // push slice onto the chunkedArr and then increment the i by the length
    chunkedArr.push(arr.slice(i, i + length));
    i += length;
  }

  return chunkedArr;
}

// use a forEach
function chunkArray(arr, length) {
  const chunkedArr = [];

  // loop thru arr
  arr.forEach(val => {
    // get last element - starts at 'undefined'
    const last = chunkedArr[chunkedArr.length - 1];

    // check if last, if last length is equal to chunk len
    if (!last || last.length === length) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}
