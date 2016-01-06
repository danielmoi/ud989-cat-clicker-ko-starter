function hello(myArguments) {
  console.log("arguments: " + arguments); // [object Arguments]
  console.log("myArguments: " + myArguments); // Apple
  console.log("arguments[0]: " + arguments[0]); // Apple
  console.log("arguments[1]: " + arguments[1]); // Orange
  console.log("arguments[2]: " + arguments[2]); // Lemon
  console.log("typeof(arguments): " + typeof(arguments));
  console.log(arr.length);// error: arr is not defined
}

hello("Apple", "Orange", "Lemon");

function captureAll() {
  var argsArray = Array.prototype.slice.call(arguments);
  console.log("arguments: " + arguments); // [object Arguments]
  console.log("argsArray: " + argsArray); // Hello, Water, Apple
}
  
captureAll("Hello", "Water", "Apple");