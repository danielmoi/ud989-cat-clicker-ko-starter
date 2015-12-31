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
      {
        nickname: "Sal"
    },
      {
        nickname: "S-Lo"
    },
      {
        nickname: "Salzzzz"
    },
      {
        nickname: "Salaza"
    }

  ]);

    //  <li data-bind="text: nickname"></li>


    this.nicknames = ko.observableArray(
    ["Sal", "S-Lo", "Salzzzz", "Salaza"]

    );

    //  <li data-bind = "text: $data"> </li>

    //
    //
    // ************************

    this.level = ko.computed(function () {
      if (this.clickCount() < 11) {
        return "Newborn";
      } else {
        return "Infant";
      }
    }, this);

    //
    //

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
  
  
  
  // *************
  
  
<img src="" alt="cute cat" data-bind="click: $parent.incrementCounter, attr: {src: imgSrc}">

  this.currentCat = ko.observable( new Cat() );

  this.incrementCounter = function () {
    this.clickCount(this.clickCount() + 1)
  };

  // ***************
  
  