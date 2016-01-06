// ********************

// BIND

// From JSIS
// http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/

// ********************

// 1. Setting 'this' value on methods

// This generates an error "TypeError: cannot read property '1' of undefined
// 'this' is bound to $("#button")
// NB had to change .val to .html (from JSIS example)
var user = {
  data: [
    {name: "Daniel", age: 22},
    {name: "Tom", age: 33}
    ],
  clickHandler: function (event) {
    var randomNum = ((Math.random() * 2 | 0) + 1) - 1;
    
    $("#button").html(this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

$("#button").click(user.clickHandler);

// ** SOLUTION **

// use the 'bind' method!

$("#button").click(user.clickHandler.bind(user));

// ********************

// 2. another example

var data = [
    {name: "Daniel", age: 22},
    {name: "Tom", age: 33}
  ];

var user = {
  data: [
    {name: "John", age: 22},
    {name: "Sam", age: 33}
    ],
  showData: function (event) {
    var randomNum = ((Math.random() * 2 | 0) + 1) - 1;
    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

var showDataVar = user.showData;

// This will output "Daniel 22" or "Tom 33" from the global 'data' variable, because 'showDataVar' will have 'this' set to the global 'window' object
showDataVar();

// ** SOLUTION **

// use 'bind' method!

var showDataVar = user.showData.bind(user);
showDataVar(); // John 22

// another way
var showDataVar = user.showData;

// use 'bind' and invokve at same time
showDataVar.bind(user)();


// ****************

// 2. use 'bind' to borrow methods

var cars = {
  data: [
    {name: "Sally", age: 22},
    {name: "Jill", age: 33}
    ]
};


cars.showData = user.showData.bind(cars);
cars.showData(); // Jill 33

// NB this actually DUPLICATES the method from 'user' into 'cars'

// so we can do it this way
// set 'this' with 'bind' and invoke immediately

user.showData.bind(cars)();

// ****************

// 3. use 'bind' to CURRY functions
// function currying is also known as partial function application
// ie. to "preset one or more of the parameters"
// 'bind' is like 'set'

function greet(gender, age, name) {
  // if male, use Mr, else use Ms
  var salutation = gender === "male" ? "Mr." : "Ms.";
  
  if (age > 25) {
    return "Hello, " + salutation + name + ".";
  }
  
  else {
    return "Hey, " + name + ".";
  }
}

greet(); // Hey, undefined
greet("male", 26, "Smith"); // Hello, Mr. Smith

// this will bind "male" and "45", and leave 'this' empty (null)
// however, after the bind, everything is 'reset' – nothing happens
greet.bind(null, "male", 45);

// this will bind "male" and "45", and keep these in a new function stored in the variable 'oldMale'
var oldMale = greet.bind(null, "male", 45);
oldMale(); // Hello, Mr.undefined
oldMale("Daniel"); // Hello, Mr.Daniel

// this will bind "" to gender, and "20" to age, leaving name empty
// NB "" must be used, and not , ,
var youngPerson = greet.bind(null, "", 20);
youngPerson("Jill"); //
