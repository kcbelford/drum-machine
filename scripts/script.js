$(document).ready(function() {
  const cowbell = new Audio("./assets/audio/808-Cowbell1.wav");
  $('#cowbell').click(e => cowbell.play());

  const clap = new Audio("./assets/audio/808-Clap02.wav");
  $('#clap').click(e => clap.play());

  const clave = new Audio("./assets/audio/808-Clave1.wav");
  $('#clave').click(e => clave.play());

  const hiHatClosed = new Audio("./assets/audio/808-HiHats01.wav");
  $('#hihatclosed').click(e => hiHatClosed.play());

  const kick = new Audio("./assets/audio/808-Kicks01.wav");
  $('#kick').click(e => kick.play());

  const hiHatOpened = new Audio("./assets/audio/808-OpenHiHats05.wav");
  $('#hihatopened').click(e => hiHatOpened.play());

  const snare = new Audio("./assets/audio/808-Snare01.wav");
  $('#snare').click(e => snare.play());

  const tom = new Audio("./assets/audio/808-Tom2.wav");
  $('#tom').click(e => tom.play());

  console.log("working?");
});
