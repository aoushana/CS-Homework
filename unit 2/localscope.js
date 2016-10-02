function myLocalScope() {
	firstName = "Adrena";
}
myLocalScope();
alert(firstName); // firstName is "Adrena"


function myLocalScope2() {
	var lastName = "Adrena";
}
myLocalScope2();
alert(lastName); // lastName is undefined

var someVar = "Hat";

function myFun() {
  someVar = "Head";
  alert(someVar);
}
myFun();

alert(someVar);
