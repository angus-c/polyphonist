var Voice = require('./Voice');
var numberOfTracks = 4;
var notes = require('./notes');

var voices = [];
var i = numberOfTracks;
while (i--) {
  voices.push(new Voice);
}

var scale1 = [notes.c3, notes.d3, notes.e3, notes.f3, notes.g3, notes.a3, notes.b3, notes.c4];
var scale2 = [notes.c4, notes.d4, notes.e4, notes.f4, notes.g4, notes.a4, notes.b4, notes.c5];
i = 0;
var int = setInterval(function() {
  voices[0].play(scale1[i], 0.1);
  voices[1].play(scale2[i], 0.1);
  i++;
}, 1000);


//voices[1].play(notes.e0, 0.1);
//voices[2].play(notes.g0, 0.1);
//voices[3].play(notes.c1, 0.1);
