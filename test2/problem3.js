Explain the below code. Include the final output to console.log().
Tip: Higher Order Function (Callback).

function Thing(name) {
  // This references Thing, the function we are inside. This only helps when we
  // construct the function-call it with the new keyword
  this.name = name;
}

// Thing.prototype is how we assign instance properties outside of the function.
// This is equivalent to writing this.doSomething inside function Thing.
Thing.prototype.doSomething = function(callback, salutation) {
  // The value of this is an instance of Thing. The .call property's first
  // argument allows us to reassign the value of this within the function we
  // are calling .call on...The remaining arguments of .call will be passed
  // to that same function.
  callback.call(this, salutation);
}

function Afunction(salutation) {
  console.log(salutation + " " + this.name); // "Hello John Smith"
}

// We construct a new instance of Thing and assign it to t.
var t = new Thing('John Smith');

// Instances of Thing have a function called doSomething.
t.doSomething(Afunction, 'Hello');
