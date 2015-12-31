// **
// Model
// **

var Cat = function () {
  this.clickCount = ko.observable(0);

  this.name = ko.observable('Sally');

  this.nicknames = ko.observableArray(
    ["Sal", "S-Lo", "Salzzzz", "Salaza"]
  );


  this.level = ko.computed(function () {
    var title;
    var clicks = this.clickCount();
    if (clicks < 11) {
      title = "Newborn";
    } else if (clicks < 20) {
      title = "Infant";
    } else {
      title = "Ninja";
    }
    return title;
  }, this);

  this.imgSrc = ko.observable('img/Sally.jpg');

  this.imgAttribution = ko.observable('http://ampersandmoi.com');
};

// **
// ViewMmodel
// **

var ViewModel = function () {
  
  var self = this;
  this.currentCat = ko.observable( new Cat() );
  




  this.incrementCounter = function () {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1)
  };

};

ko.applyBindings(new ViewModel());