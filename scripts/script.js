$(document).ready(function() {
  const cowbell = new Audio("./assets/audio/808-Cowbell1.wav");
  // $('#cowbell').click(e => cowbell.play());
  $('#cowbell').mousedown(function(e) {
    e.preventDefault();
    cowbell.load();
    cowbell.play();
  });

  const clap = new Audio("./assets/audio/808-Clap02.wav");
  // $('#clap').click(e => clap.play());
  $('#clap').mousedown(function(e) {
    e.preventDefault();
    clap.load();
    clap.play();
  });

  const clave = new Audio("./assets/audio/808-Clave1.wav");
  // $('#clave').click(e => clave.play());
  $('#clave').mousedown(function(e) {
    e.preventDefault();
    clave.load();
    clave.play();
  });

  const hiHatClosed = new Audio("./assets/audio/808-HiHats01.wav");
  // $('#hihatclosed').click(e => hiHatClosed.play());
  $('#hihatclosed').mousedown(function(e) {
    e.preventDefault();
    hiHatClosed.load();
    hiHatClosed.play();
  });

  const kick = new Audio("./assets/audio/808-Kicks05.wav");
  // $('#kick').click(e => kick.play());
  $('#kick').mousedown(function(e) {
    e.preventDefault();
    kick.load();
    kick.play();
  });

  const hiHatOpened = new Audio("./assets/audio/808-OpenHiHats05.wav");
  // $('#hihatopened').click(e => hiHatOpened.play());
  $('#hihatopened').mousedown(function(e) {
    e.preventDefault();
    hiHatOpened.load();
    hiHatOpened.play();
  });

  const snare = new Audio("./assets/audio/808-Snare05.wav");
  // $('#snare').click(e => snare.play());
  $('#snare').mousedown(function(e) {
    e.preventDefault();
    snare.load();
    snare.play();
  });

  const conga = new Audio("./assets/audio/808-Conga4.wav");
  // $('#conga').click(e => conga.play());
  $('#conga').mousedown(function(e) {
    e.preventDefault();
    conga.load();
    conga.play();
  });

  console.log("working?");
});
