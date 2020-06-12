$(document).ready(function() {

  const cowbell = new Audio("./assets/audio/808-Cowbell1.wav");
  $('#cowbell').mousedown(function(e) {
    e.preventDefault();
    cowbell.load();
    cowbell.play();
  });

  const clap = new Audio("./assets/audio/808-Clap02.wav");
  $('#clap').mousedown(function(e) {
    e.preventDefault();
    clap.load();
    clap.play();
  });

  const clave = new Audio("./assets/audio/808-Clave1.wav");
  $('#clave').mousedown(function(e) {
    e.preventDefault();
    clave.load();
    clave.play();
  });

  const hiHatClosed = new Audio("./assets/audio/808-HiHats01.wav");
  $('#hihatclosed').mousedown(function(e) {
    e.preventDefault();
    hiHatClosed.load();
    hiHatClosed.play();
  });

  const kick = new Audio("./assets/audio/808-Kicks05.wav");
  $('#kick').mousedown(function(e) {
    e.preventDefault();
    kick.load();
    kick.play();
  });

  const hiHatOpened = new Audio("./assets/audio/808-OpenHiHats05.wav");
  $('#hihatopened').mousedown(function(e) {
    e.preventDefault();
    hiHatOpened.load();
    hiHatOpened.play();
  });

  const snare = new Audio("./assets/audio/808-Snare05.wav");
  $('#snare').mousedown(function(e) {
    e.preventDefault();
    snare.load();
    snare.play();
  });

  const conga = new Audio("./assets/audio/808-Conga4.wav");
  $('#conga').mousedown(function(e) {
    e.preventDefault();
    conga.load();
    conga.play();
  });

  console.log("working?");
});
