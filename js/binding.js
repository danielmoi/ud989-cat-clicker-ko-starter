var Cat = function() {
  this.name = ko.observable("Sally");
  this.age = ko.observable(10);
};

var Dog = function() {
  this.name = ko.observable("Tom");
  this.age = ko.observable(7);
};

var ViewModel = function () {
  this.cat = ko.observable(new Cat());
  this.dog = ko.observable(new Dog());
  this.country = ko.observable("Japan");
};

ko.applyBindings(new ViewModel());