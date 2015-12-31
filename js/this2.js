var display = document.getElementById("display");

var globalVariable = {
  // NB this is an object literal – comma separated list
  name: "Hello",
  //  this.age: 444; // can't have a property with a property
  print: function () {
    console.log(this);

  }
};

display.innerHTML = globalVariable.name; // Hello
display.innerHTML = window.globalVariable.name; // Hello


function globalFunction () {
  var name = "Bye";
  var self = this;
  console.log(this);
  console.log(this.name);
  console.log(self);
  var subFunction = function () {
    var self = this;
    console.log(self);
  };
  subFunction();
}

var Cat = function (nameparam) {
  this.name = nameparam;
}

var daniel = new Cat("Daniel");