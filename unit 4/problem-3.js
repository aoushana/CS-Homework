// "model" - a theory that represents data
function Person(name, mother, father, spouse, children) {
  this.name = name;
  this.mother = mother;
  this.father = father;
  this.spouse = spouse;
  this.children = children;

  this.changeSpouse = function (spouseName) {
    this.spouse = spouseName;
  };
}

var children = ["Aolani", "Hiro", "Xue"];
var ani = new Person("Ani", null, null, "Sipho", children);
var sipho = new Person("Sipho", "Tuulia", null, "Ani", children);

console.log(ani.spouse);
ani.changeSpouse("mars");
console.log(ani.spouse);
