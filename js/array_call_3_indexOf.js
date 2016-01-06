var arrayLikeObject = {
  0: "Martin",
  1: 78,
  2: 67,
  3: ["Letta", "Marieta", "Pauline"],
  length: 4
};


// Let's use some Array methods by using 'call'
// 1. indexOf
// 2. slice
// 3. pop = remove
// 4. push = add

// 1. indexOf

// ***************

// Let's look for "Martin"

console.log(
  (Array.prototype.indexOf.call(arrayLikeObject, "Martin")) === -1 ? "Not there" : "Found!"
  );
// Found!
// NB the conditional operator is being used!
// the entire expression inside the console.log() IS the operator!


// ***************

// Let's look for "Marieta"

console.log(
  (Array.prototype.indexOf.call(arrayLikeObject, "Marieta")) === -1 ? "Not there" : "Found!"
  );
// Not found!


// ***************

// Let's look for "Marieta" again

console.log(
  (Array.prototype.indexOf.call(arrayLikeObject[3], "Marieta")) === -1 ? "Not there" : "Found!"
  );
// Found!

// ***************

// 2. slice

// Let's convert arrayLikeObject into an array

var myArray = Array.prototype.slice.call(arrayLikeObject, 0);

// 3. pop

console.log(
  Array.prototype.pop.call(arrayLikeObject)
  );
// {0: Array[3], 1: 67, 2: 78, length: 3}

// 4. push

console.log(
  Array.prototype.push.call(arrayLikeObject, "Daniel")
  );
// Object {0: "Martin", 1: 78, 2: 67, 3: "Daniel", length: 4}