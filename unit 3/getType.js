function getType(value) {
  if (Array.isArray(value)){
    return "array";
  }
   return typeof value;
}
console.log(getType("Hello")); // string
console.log(getType(5)); // number
console.log(getType(false)); // Boolean
console.log(getType([])); // array
console.log(getType({})); // object
console.log(getType());// undefined
