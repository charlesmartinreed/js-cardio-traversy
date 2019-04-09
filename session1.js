// Challenge 3: Reverse an Integer
// Return an integer in reverse - reverseInt(521) === 125

// simple solution
function reverseInt(int) {
  //convert, split, reverse, join
  //wrap entire chain in parseInt since we need to RETURN AN INT
  // math.sign allows us to keep the number positive or negative = returns -1 if negative, so return * -1.
  return (
    parseInt(
      int
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(int)
  );
}
