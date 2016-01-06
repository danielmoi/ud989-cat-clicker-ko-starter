// Instantiate a variable with an object literal
// NB. comma separated list of properties (key:value pairs)
// showFullName is a property with a *function expression definition* as its value (ie. it is a method
// 
// 'showFullName' will be invoked by the 'person' object, so 'this' will have the value of the 'person' object

var person = {
  firstName: "Tom",
  lastName: "Smith",
  showFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  }
};

// Invoke 'showFullName'
// upon invocation, 'this' will change from having the value of the global 'window' object to the 'person' object

// 'this' will show 'Object' as the 'name' of 'this', but all the properties will be the same as the invoking object
// this: Object
//  firstName: "Tom"
//  lastName: "Smith"
//  showFullName: function ()

person.showFullName(); // Tom Smith


// *******************

// Instantiate 2 variables with string values
// These are global variables

var firstName = "John",
    lastName = "West";

// Function declaration
// This function is defined in the global scope
// When showFullName is invoked, 'this' will have the value of the 'window' object
function showFullName () {
  console.log(this.firstName + " " + this.lastName);
}

// Invoke 'showFullName'
showFullName(); // John West
window.showFullName(); // (same)

// *******************

// Problems using 'this'

// *******************

// 1. 'this' is used in a method, passed as a callback

// Callback == function used as a parameter by another function

// Instantiate a variable with an object literal
// 2 properties
// property2 = method that uses 'this'
var user = {
  data: [
    {name: "Daniel", age: 42},
    {name: "Arnold", age: 33}
    ],
  clickHandler: function () {
    var randomNum = ((Math.random() * 2 | 0) + 1) - 1;
    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

// Invoke 'clickHandler' as a callback – inside the 'click' method in jQuery
// Upon invocation, 'this' is given the value of '$('button')', so user.clickHandler will result in $('button').data[randomNum] etc, which doesn't exist
// NB this example will only invoke the function (and thus show the error), when the div is clicked.
$('#button').click(user.clickHandler);

// But if we explicitly set 'this' (using bind) to user, all is good
$('#button').click(user.clickHandler.bind(user));


// *******************

// 2. 'this' inside closure

// Closure == inner method

// Closures cannot access the outer function's 'this' variable by using the 'this' keyword, because the outer 'this' is only accessible by that function, and not by inner functions

// Instantiate a variable with an object literal
// 3 properties with these values: a string, an array, and a function
var user = {
  tournament: "The Masters",
  data: [
    {name: "Daniel", age: 42},
    {name: "Arnold", age: 33}
    ],
  clickHandler: function () {
    this.data.forEach(function (person) {
      console.log("What is 'this' referring to? " + this);
      console.log(person.name + " is playing at " + this.tournament);
    });
  }
};

// When we invoke the outer 'clickHandler' method, the inner function's (closure) 'this' cannot access the outer function's 'this', so the default global 'window' object becomes the value of 'this'
user.clickHandler();
// [object Window]
// Daniel is playing at undefined
// [object Window]
// Arnold is playing at undefined

// **SOLUTION**

var user = {
  tournament: "The Masters",
  data: [
    {name: "Daniel", age: 42},
    {name: "Arnold", age: 33}
    ],
  clickHandler: function () {
    var theUserObject = this; // the magic line
    this.data.forEach(function (person) {
      console.log("What is 'this' referring to? " + theUserObject);
      console.log(person.name + " is playing at " + theUserObject.tournament);
    });
  }
};

// Now when we invoked the outer method, the outer object's 'this' is stored BEFORE the inner function is invoked; when the inner function (closure) is invoked, the outer 'this' has been stored and is accessible
user.clickHandler();
// [object Object] – no longer 'window'
// Daniel is playing at the Masters
// [object Object]
// Arnold is playing at the Masters

// people use "that" or "self" to capture that outer object, but using more description is more useful

// *******************

// 3. 'this' is used in a method, assigned to a variable

var data = [
  {name: "Daniel", age: 43},
  {name: "Arnold", age: 33}
  ];

var user = {
  data: [
    {name: "Sally", age: 20},
    {name: "Tom", age: 30}
    ],
  showData: function() {
    var randomNum = ((Math.random()*2 | 0) + 1) - 1;
    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

// Invoking the 'showData' method works fine, because 'this' has been assigned the value of 'user'
user.showData();
// Tom 30 (from the user data array)

// But when we assign the 'showData' method to a (global) variable, when we invoke 'showUserData', 'this' is assigned the global 'window' object
var showUserData = user.showData;
showUserData();
// Daniel 43 (from the global data array)

// **SOLUTION**

// this doesn't work
showUserData.bind(user);
// function () ... 
// this just returns the function, instead of invoking it (much like just typing showUserData)

// both of these work
showUserData.bind(user)();
// Sally 20 (from user data array)

var showUserData = user.showData.bind(user);
showUserData();

// *******************

// 4. 'this' when borrowing methods

// the 'reduce' method executes a callback function for each element in an array
var gameController = {
  scores: [20, 34, 55, 46, 77],
  avgScore: null,
  players: [
    {name: "Daniel", playerID: 987, age: 23},
    {name: "Tom", playerID: 222, age: 44}
    ]
};

var appController = {
  scores: [900, 845, 908, 840],
  avgScore: null,
  avg: function () {
    var sumOfScores = this.scores.reduce( function (prev, cur, index, array) {
      return prev + cur;
    });
    this.avgScore = sumOfScores / this.scores.length;
  }
};

// this will set the 'avgScore' property for the 'gameController' object to the average score from the 'appController' 'scores' array
// but what we want is for the average score to be calculated from the 'gameController' 'scores' array
// NB this just assigns a value; it doesn't transfer the method to the 'gameController' object
gameController.avgScore = appController.avg();


// ** SOLUTION **

// so what we do instead is invoke the 'appController' 'avg' method, but set 'gameController' as the 'this' value (and pass in the array 'gameController.scores' into the apply method)
appController.avg.apply(gameController, gameController.scores);

// NB. 'apply'/'call' allow us to use one object's method on another object, whilst keeping that method in the original object!

// *******************


// A useless use of 'this'

// This example shows what happens when 'this' is used on the LHS (ie. as a property)
// NB this is what a Construction function uses, but it's different, because when the 'new' keyword is used, then 'this' is assigned the value of the new object

var data = {
  greeting: "Hello",
  this.greeting: "Me" // can't do this – can't 'split' property names
};

var data = function () {
  greeting = "Hello";
  this.greeting = "Me";
};

greeting;
// undefined

data();
greeting;
// "Me"
// the function 'data' has assigned the property 'greeting' to the global 'window' object!!
window.greeting;
// 'Me' !!

var Cat = function () {
  this.name = "Billy";
}
var billy = new Cat();

billy.name; // "Billy"
window.name; // undefined