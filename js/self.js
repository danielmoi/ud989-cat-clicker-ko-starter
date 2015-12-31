var display = document.getElementById("display");

var Cat = function (name) {
  this.name = name;
//  display.innerHTML = display.innerHTML + name;

}

var Zoo = function () {
  var self = this;
  this.name = "Chicago";
  display.innerHTML = this.name;
  display.innerHTML = display.innerHTML + "<br>" + this.name;
  display.innerHTML = display.innerHTML + "<br>" + sam.name;

  

}

var sam = new Cat("Sam");
var zoo = new Zoo();

