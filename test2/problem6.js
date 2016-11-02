// Create an array of objects, and just print the first character of
// the `firstName` concatenated with the `lastName`
//
//
// Put the below data in a JSON formatted array where each individual is its
// own object. Then write code that will print each person's first letter of
// their first name and last name (example: msmith)
//
//
//
// firstName: Mike lastName: Smith
//
// firstName: Anna lastName: House
//
// firstName: Mark lastName: McDonald
var people = [
  {firstName: "Mike", lastName: "Smith"},
  {firstName: "Anna", lastName: "House"},
  {firstName: "Mark", lastName: "McDonald"},
];
for (var i = 0; i < people.length; i++) {
  var person = people[i];
  console.log(person.firstName[0] + person.lastName)
};
