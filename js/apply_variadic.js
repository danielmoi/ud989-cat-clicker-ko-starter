// *************

// use Math.max with a comma-separated list

console.log(Math.max(23, 11, 34, 56));
// 56


// *************

// Now use Math.max with an array

var allNumbers = [23, 11, 34, 56];
console.log(Math.max(allNumbers)); // NaN

// set 'this' to 'null'
console.log(Math.max.apply(null, allNumbers));

// this works, because 'this' is not used by 'Math.max'
console.log(Math.max.apply(window, allNumbers));

// this works too
console.log(Math.max.apply("", allNumbers));

// *************

var students = ["Peter", "Daniel", "Jill", "Sally"];


function welcomeStudents() {
  var argsArray = Array.prototype.slice.call(arguments);
  
  // remove last element from array, and store THAT inside lastItem
  var lastItem = argsArray.pop();
  
  console.log("Welcome " + argsArray.join(", ") + ", and " + lastItem + ".");
}

welcomeStudents.apply(null, students);
// Welcome Peter, Daniel, Jill, and Sally.

// *************

// We could have done this as a pure array (which 'students' already is)

var students = ["Peter", "Daniel", "Jill", "Sally"];

function welcomeStudents() {
  var lastItem = students.pop();
  console.log("Welcome " + students.join(", ") + ", and " + lastItem + ".");
}

welcomeStudents(students);

// ************

// Do the same with 'call'

var students = ["Peter", "Daniel", "Jill", "Sally"];


function welcomeStudents() {
  var argsArray = Array.prototype.slice.bind(arguments)();
  
  // remove last element from array, and store THAT inside lastItem
  var lastItem = argsArray.pop();
  
  console.log("Welcome " + argsArray.join(", ") + ", and " + lastItem + ".");
}

// this doesn't work, because 'students' is passed in as the singular parameter, and it isn't a value, so an array of length 0 is created)
welcomeStudents.call(null, students);
// Welcome , and Peter,Daniel,Jill,Sally.
// Somehow, argsArray is empty
// But, lastItem is ["Peter", "Daniel", "Jill", "Sally"]

// this works
welcomeStudents.call(null, "Peter", "Daniel", "Jill", "Sally");