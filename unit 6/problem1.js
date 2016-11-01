// Define a Employee.Prototype for the Employee constructor function shown below.
// The Employee.Prototype should have the property ssn set to "000-00-0000" and
// dept set to "empty". Also define a Employee.Prototype method that returns the
// follow string "firstName lastName : dept" .
//
// Note: You can modify the below code in anyway to create the require Prototypes
// properties and/or method.

function Employee(first, last, ssn, eid, dept) {

  this.firstName = first;
  this.lastName = last;

  if (ssn) {
    this.ssn = ssn;
  }
  this.eid = eid;
  
  if (dept) {
  this.dept = dept;
  }
}

Employee.prototype.ssn = "000-00-0000";
Employee.prototype.dept = "empty";
Employee.prototype.info = function() {
  return this.firstName +" "+ this.lastName +" : "+ this.dept;
}

var eJohnDoe = new Employee("John", "Doe", "123-34-1234", "001234", "acct");
var eSallyRally = new Employee("Sally", "Rally","123-34-1235", "001235", "hr");
var adrena = new Employee("Adrena", "Oushana", 5, 1,"eng")

console.log(eJohnDoe.info()) // "John Doe : acct"
console.log(adrena.info()) // "Adrena Oushana : eng"
