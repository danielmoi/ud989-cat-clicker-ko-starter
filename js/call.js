// this doesn't work
var daniel = {
  scores: [20, 30, 40],
  total: null,
  sumScores: function () {
    this.scores.forEach(function (arrayElement) {
      this.total += arrayElement;
    });
  }
};
    

// this works

var daniel = {
  scores: [20, 30, 40],
  total: 0,
  sumScores: function () {
    for (score in this.scores) {
      console.log(score);
      this.total += this.scores[score];
    }
  }
};


var tom = {
  scores: [30, 40, 60],
  total: 0
};

daniel.sumScores.apply(tom, tom.scores);
daniel.sumScores.apply(tom, [tom.scores]);

daniel.sumScores.call(tom, tom.scores); // can use 'call' too

                        