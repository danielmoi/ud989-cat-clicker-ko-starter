// create our data object "ViewModel"
var ViewModel = function () {

  //
  // DATA = MODEL
  //
  // this is actually putting the Model inside the ViewModel (controller)
  // however, there is still FUNCTIONAL separation of concerns


  // initialise new property "clickCount" and set its value to "0"
  this.clickCount = ko.observable(0);

  // initialise new property "name" and set its value to "Sally"
  this.name = ko.observable('Sally');
  
  this.nicknames = ko.observableArray([
    {nickname1: "Sal",
     nickname2: "S-Lo", 
     nickname3: "Salzzzz"
    }
  ]);


  this.level = ko.computed(function () {
    if (this.clickCount() < 11) {
      return "Newborn";
    } else {
      return "Infant";
    }
  }, this);

  this.imgSrc = ko.observable('img/Sally.jpg');
  this.imgAttribution = ko.observable('http://ampersandmoi.com');


  //
  // CONTROLLER = VIEWMODEL
  //
  // liases with data, based on user interaction with view

  this.incrementCounter = function () {
    // SET clickCount to clickCount() (which returns current clickCount) PLUS 1
    // remember that returning values in KO requires executing the function
    // ie. clickCount() and not clickCount (which would return the function)
    this.clickCount(this.clickCount() + 1)
  };

};

// Tell KO to apply the bindings to our data object ("ViewModel", which is a function)
ko.applyBindings(new ViewModel());