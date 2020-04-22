$(document).ready(function() {
  const cowbell = new Audio("./assets/audio/808-Cowbell1-d.wav");
  $('#cowbell').click(e => cowbell.play());

  const clap = new Audio("./assets/audio/808-Clap02-e.wav");
  $('#clap').click(e => clap.play());

  const clave = new Audio("./assets/audio/808-Clave1-c.wav");
  $('#clave').click(e => clave.play());

  const hiHatClosed = new Audio("./assets/audio/808-HiHats01-b.wav");
  $('#hihatclosed').click(e => hiHatClosed.play());

  const kick = new Audio("./assets/audio/808-Kicks05-b.wav");
  $('#kick').click(e => kick.play());

  const hiHatOpened = new Audio("./assets/audio/808-OpenHiHats05-b.wav");
  $('#hihatopened').click(e => hiHatOpened.play());

  const snare = new Audio("./assets/audio/808-Snare05-c.wav");
  $('#snare').click(e => snare.play());

  const conga = new Audio("./assets/audio/808-Conga4.wav");
  $('#conga').click(e => conga.play());

  console.log("working?");
});
