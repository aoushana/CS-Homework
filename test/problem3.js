// var languages = function getType(){
//        english: "Hello!",
//        french: "Bonjour!",
//        notALanguage: 4,
//        spanish: "Hola!"
//    };
//   for(var hello in languages){
//       var value = hello;
//       if (typeof value === "string"){
//       console.log(getType);
//       }
//   };
// }
function getType(value) {
  if (typeof value === "string"){
    return "string";
  }
}

console.log(getType("Hello")); // string
console.log(getType(5)); // number
console.log(getType(false)); // Boolean
console.log(getType([])); // object
console.log(getType({})); // object
