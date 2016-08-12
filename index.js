var Voice = require('./Voice');
var numberOfTracks = 4;
var interval = 200;
var pitches = require('./pitches');
var defaultScore = require('./scores/bachGMinorFugue');

var voices = [];
var i = numberOfTracks;
while (i--) {
  voices.push(new Voice);
}

module.exports = playScore;

function playScore(score) {
  score = score || defaultScore;
  var notes, i = 0;
  var int = setInterval(function() {
    if (i > score.length - 1) {
      global.clearInterval(int);
      for (var j = 0; j < numberOfTracks; j++) {
        voices[j].rest();
      }
      process.exit(0);
    } else {
      notes = score[i++].split('.');
      console.log(notes)
      for (var j = 0; j < numberOfTracks; j++) {
        var note = notes[j] && notes[j].trim();
        if (note) {
          voices[j].play(pitches[note], 0.1);
        } else {;
          voices[j].rest();
        }
      }
    }
  }, interval);
}

playScore();
