var Voice = require('./Voice');
var numberOfTracks = 4;
var interval = 200;
var pitches = require('./pitches');

var voices = [];
var i = numberOfTracks;
while (i--) {
  voices.push(new Voice);
}

var score = [
  'c3.c5', 'd3.b4', 'e3.a4', 'f3.g4', 'g3.f4', 'a3.e4', 'b3.d4', 'c4.c4'
];
var notes;

i = 0;
var int = setInterval(function() {
  if (i > score.length - 1) {
    global.clearInterval(int);
    voices[0].rest();
    voices[1].rest();
  } else {
    notes = score[i++].split('.');
    voices[0].play(pitches[notes[0]], 0.1);
    voices[1].play(pitches[notes[1]], 0.1);
  }
}, interval);


//voices[1].play(notes.e0, 0.1);
//voices[2].play(notes.g0, 0.1);
//voices[3].play(notes.c1, 0.1);
