var display = document.getElementById("display");

var cat = {
  age: 123,
  print: function () {
    display.innerHTML = "cat.age = " + cat.age;
    display.innerHTML = display.innerHTML + "<br>" + "this.age = " + this.age;
    "this.color = " + this.color;
  }
};

//cat.print();


var dog = function () {
  this.age = 133;
  var print = function () {
    return display.innerHTML = this.age;
  }
};

//dog.print();

var bird = {
  wings: 2,
  beak: 1,
  name: "none yet",

  parrot: function () {
    var self = this;
    var name = "Tom";
    display.innerHTML = self.name;
    var print = function () {

      display.innerHTML = "Hello" + self.name;
    }
    print();
    console.log(display.innerHTML);
    return display.innerHTML = self.name;
  }
}
bird.parrot();

var myObject = {
  param: 123,
  method: function () {
    alert(this.param);
  },
  method2: function () {
    setTimeout(function () {
      alert(this.param);
    }, 100);
  }
};