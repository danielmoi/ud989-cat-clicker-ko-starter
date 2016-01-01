// **
// Model
// **

var catRawData = [
  {
    clickCount: 0,
    name: 'Dozy',
    imgSrc: 'img/Dozy.jpg',
    imgAttribution: 'http://ampersandmoi.com',
    nicknames: ['Dolz', 'D-Lo']
  },
  {
    clickCount: 0,
    name: 'Pounce',
    imgSrc: 'img/Pounce.jpg',
    imgAttribution: 'http://ampersandmoi.com',
    nicknames: ['Pouncer', 'P-Lo']
  },
  {
    clickCount: 0,
    name: 'Sally',
    imgSrc: 'img/Sally.jpg',
    imgAttribution: 'http://ampersandmoi.com',
    nicknames: ['Salz', 'S-Lo', 'Sall 4000', 'Smackdown S']
  },
  {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/Tiger.jpg',
    imgAttribution: 'http://ampersandmoi.com',
    nicknames: ['Tigez', 'T-Lo']
  },
  {
    clickCount: 0,
    name: 'Tom',
    imgSrc: 'img/Tom.jpg',
    imgAttribution: 'http://ampersandmoi.com',
    nicknames: ['Tomzz', 'T 4000']
  }
  ];

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
  
  this.catList = ko.observableArray([]);
  
  catRawData.forEach(function(catItem) {
    self.catList.push( new Cat(catItem) );    
  });
  
  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function () {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1)
  };

};

ko.applyBindings(new ViewModel());