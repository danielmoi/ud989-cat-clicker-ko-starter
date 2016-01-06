// MORE ON USING 'bind' to borrow a method

// Instatiate 2 objects, one with a showData function, and one without
var user1 = {
  data: [
    {name: "Daniel", age: 22},
    {name: "Tom", age: 33}
  ]
};

var user2 = {
  data: [
    {name: "John", age: 22},
    {name: "Sam", age: 33}
    ],
  showData: function (event) {
    var randomNum = ((Math.random() * 2 | 0) + 1) - 1;
    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

// **************
// 1. Unsuccessful borrow – 'this' is set, but nothing happens
// set 'this' in 'showData' to be 'user1'
user2.showData.bind(user1);

// however, once it is set, nothing happens
// so when we invoke showData, 'this' is set to 'user2' again
user2.showData(); // John 22



// **************
// 2. Unsuccessful borrow – method is duplicated (inside user1), so it's not really a borrow

user1.showData = user2.showData;

// **************
// 3. Unsuccessful borrow - method is duplicated (inside a new variable), and 'this' is not correct

var data = [
    {name: "Jill", age: 22},
    {name: "Sally", age: 33}
  ];

// this will only work if there is a global 'data' object (see code inside 'showData'
// 'this' has not been explicitly set, so it will be assigned the global 'window' object, hence there needs to be a global 'data' object
var newShowData1 = user2.showData;
newShowData1(); // Jill 22, from global data

// **************
// 4. Unsuccessful borrow – method is duplicated

// use 'bind' to set 'this' to 'user1'
// set 'this' and store this action inside a new variable

var newShowData2 = user2.showData.bind(user1);
newShowData2(); // Daniel 22, from user1 data

// **************
// 5. Successful borrow
// set and invoke
user2.showData.bind(user1)(); // Daniel 22