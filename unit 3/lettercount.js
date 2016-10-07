function counter(str,letter) {
  var count = 0;
  for( var i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      count += 1;
    }
  }
  return count;
}

console.log(counter('w3resource.com', 'o'));


// The function is called counter that has two parameters called str and letter.
// The counter function returns a number of occurences of letter in str. We are
// calling counter with two args called w3resource.com and o. Line, 3 loops
// through zero and the length of str (14). On line 4, we access the character
// in str at index i and see if it equals to letter. If it does, we add to the
// counter. Once the loop is done, we return count.


// Next we console.log the return of the invocation of counter.

// Inside the counter function, we want to keep track of a number and
// occurences. Next, we are looping through str.
