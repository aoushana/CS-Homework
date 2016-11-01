// Write a JavaScript function to check if an object contains given property.
// Create a function checkGivenProperty() that accepts a object and a property
// name as arguments and return true or false.
//
// Tip 1: Use hasOwnProperty.call()
//
// Tip 2: First create an object with properties , then use hasOwnProperty.call()
// to check for a given property.

function checkGivenProperty(object, name) {
  return object.hasOwnProperty(name);

}



var object = {
  foo: "bar",
  hello: "world"
};

console.log(checkGivenProperty(object,"foo"))
