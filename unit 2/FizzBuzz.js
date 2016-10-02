for (var i = 1; i <= 120; i++) {
  if ( i % 4 == 0) {
    console.log("Fizz");
  }
  else if ( i % 10 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }

  if ( i % 4 == 0 && i % 10 == 0) {
    console.log("FizzBuzz");
  }
}
