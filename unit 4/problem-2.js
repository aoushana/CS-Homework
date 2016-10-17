function sum(numbers) {
	var total = 0;
  for (var i = 0; i<numbers.length; i++){
  	total += numbers[i]
  }
  return total;
}

function range(start, end) {
	var array = []; // creates an emppty array to push to
  for (var i = start; i<=end; i++) { // loops have a start and an end
  	array.push(i);
  }
  return array;
}

console.log(sum(range(1, 10)));
