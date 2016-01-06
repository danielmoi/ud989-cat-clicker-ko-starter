// ************

// 1. use slice() on array

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1,3);
citrus; // ["Orange", "Lemon"]

// ************

// 2. use slice() on array-like object

var fruitArrayLike = {
  1: "Banana",
  2: "Orange",
  3: "Lemon",
  4: "Apple",
  5: "Mango"
};
var citrus2 = fruitArrayLike.slice(1,3); // error: fruitArrayLike.slice is not a function
citrus2; // ["Orange", "Lemon"];

// ************

// 3. use slice() through the call() method

// NB note that a length property is needed
var fruitArrayLike = {
  1: "Banana",
  2: "Orange",
  3: "Lemon",
  4: "Apple",
  5: "Mango",
  length: 6
};

// now we convert that array-like object into a real array, using slice(0) and call()
var citrus3 = Array.prototype.slice.call(fruitArrayLike, 0); 

citrus3; // [undefined × 1, "Banana", "Orange", "Lemon", "Apple", "Mango"]
// NB the first element, with key "0" is undefined

var citrus4 = Array.prototype.slice.call(fruitArrayLike, 1, 3); 
citrus4; // ["Banana", "Orange"]

// We can also use 'apply':
var citrus5 = Array.prototype.slice.apply(fruitArrayLike, [1, 3]); 
citrus5; // ["Banana, "Orange"]

// 'bind' can be used too
var citrus6 = Array.prototype.slice.bind(fruitArrayLike, 1, 3)();
citrus6; // [undefined × 1, "Banana", "Orange", "Lemon", "Apple", "Mango"]

// or we could use 'bind' like this:
var citrusSlice = Array.prototype.slice.bind(fruitArrayLike);
citrusSlice(1,3); // ["Banana, "Orange"]
// NB. this has duplicated the slice method into citrusSlice


// **************

// Attempt to use non-integer keys

var fruitArrayLike2 = {
  one: "Banana",
  two: "Orange",
  three: "Lemon",
  four: "Apple",
  five: "Mango",
  length: 7
};
var citrus7 = Array.prototype.slice.call(fruitArrayLike2, 0);
citrus7; // [undefined × 7]
// NB the length property has not been 'overwritten' 

