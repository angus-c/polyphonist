var Speaker = require("speaker");
var AudioContext = require("web-audio-engine").StreamAudioContext;
var context = new AudioContext();

module.exports = Voice;
 
function Voice() {
  this.osc = context.createOscillator();
  this.amp = context.createGain();
  this.osc.connect(this.amp);
  this.osc.type = "square";
  this.amp.connect(context.destination);
  context.pipe(new Speaker());
  context.resume();
  this.osc.onended = function() {
    // process.exit(0);
  };
}

Voice.prototype.play = function(pitch, volume) {
  this.osc.frequency.setValueAtTime(pitch);
  this.osc.start(0);
  this.amp.gain.setValueAtTime(volume)
}

Voice.prototype.rest = function() {
  this.osc.stop(0);
  this.amp.gain.setValueAtTime(0)
}
