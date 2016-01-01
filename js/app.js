// **
// Model
// **

var Cat = function (data) {
  this.clickCount = ko.observable(data.clickCount);

  this.name = ko.observable(data.name);

  this.imgSrc = ko.observable(data.imgSrc);
  
  this.imgAttribution = ko.observable(data.imgAttribution);
  
  this.nicknames = ko.observableArray(data.nicknames);



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


};

// **
// ViewMmodel
// **

var ViewModel = function () {
  
  var self = this;
  this.currentCat = ko.observable( new Cat({
    clickCount: 0,
    name: 'Sally',
    imgSrc: 'img/Sally.jpg',
    imgAttribution: 'http://ampersandmoi.com',
    nicknames: ['Salz', 'S-Lo', 'Sall 4000', 'Smackdown S']
  }) );
  




  this.incrementCounter = function () {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1)
  };

};

ko.applyBindings(new ViewModel());