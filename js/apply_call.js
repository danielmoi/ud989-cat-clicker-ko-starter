// ********************

// APPLY & CALL

// From JSIS
// http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/

// ********************

// 'apply' allows us to execute a function with an array of parameters
// each parameter is passed to the function individually when the function executes
// this is great for VARIADIC functions – functions with a variable number of arguments (not a fixed / set number)

// apply
// @param1: value for 'this'
// @param2: array (holding comma-separated list of parameters to be passed)

// call()
// @param1: value for 'this'
// @param2: argument for 1st function parameter
// @param3: argument for 1st function parameter
// @param4: argument for 1st function parameter



// ********************

// 1. Setting 'this' value on methods

// global variable
var avgScore = "global avgScore";

// global function
function avg(arrayOfScores) {
  // add all scores, and return the total
  var sumOfScores = arrayOfScores.reduce(function (prev, cur, index, array) {
    return prev + cur;
  });

  // average the scores
  // and assign this to the property 'avgScore' of 'this'
  this.avgScore = sumOfScores / arrayOfScores.length;
}

var gameController = {
  scores: [20, 34, 55, 46, 77],
  avgScore: null
};

// now to execute the 'avg'
// this will actually create a property 'avgScore' and assign it to the global 'window' object, because that is what 'this' in the 'avg' function refers to
avg(gameController.scores);

window.avgScore; // 46.4
gameController.avgScore; // null

// but we can set 'this' explicitly with 'call'
avg.call(gameController, gameController.scores);
gameController.avgScore; // 46.4

// we could also set 'this' will 'apply'
avg.apply(gameController, [gameController.scores]);


// ********************

// 2. setting 'this' in callback functions

// Instantiate an object with 3 properties
// 3rd property is a method, that accepts 2 parameters, and then creates a 4th property 'fullName'
var clientData = {
  id: 094545,
  fullName: "Not Set",
  setUserName: function (firstName, lastName) {
    this.fullName = firstName + " " + lastName;
  }
};

// call 'setUserName'
// 'this' refers to 'clientData' object
clientData.setUserName("Daniel", "Moi");
clientData.fullName; // Daniel Moi

function getUserInput(firstName, lastName, callbackFunction, callbackObject) {
  callbackFunction.apply(callbackObject, [firstName, lastName]);
}

// function declaration 1
function newClient1(firstName, lastName, callbackFunction) {
  callbackFunction(firstName, lastName);
}

// function invocation 1
newClient1("Tom", "Smith", clientData.setUserName);
clientData.fullName; // Daniel Moi, still
window.fullName; // Tom Smith

// ********************

// ** SOLUTION **
// use 'call' to set 'this'

// function declaration 2
function newClient2(firstName, lastName, callbackFunction, callbackObject) {
  callbackFunction.call(callbackObject, firstName, lastName);
}

// function invocation 2
newClient2("Tom", "Smith", clientData.setUserName, clientData);
clientData.fullName; // Tom Smith

// ********************

// ** SOLUTION **
// use 'apply' to set 'this'

// function declaration 3
function newClient3(firstName, lastName, callbackFunction, callbackObject) {
  callbackFunction.apply(callbackObject, [firstName, lastName]);
}

// function invocation 3
newClient3("Jill", "Smith", clientData.setUserName, clientData);
clientData.fullName; // Jill Smith