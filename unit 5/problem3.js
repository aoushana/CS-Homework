var ancestry = require("./ancestry.js");
ancestry = JSON.parse(ancestry);

var filteredAncesters = ancestry.filter(function(ancestor){
  return ancestor.died - ancestor.born < 40 && ancestor.died > 1800;
});

console.log(filteredAncesters);
