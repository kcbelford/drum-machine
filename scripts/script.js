$(document).ready(function() {

// trigger audio and togge class on mousedown
  const cowbell = new Audio("./assets/audio/808-Cowbell1.wav");
  $('#cowbell').mousedown(function(e) {
    e.preventDefault();
    cowbell.load();
    cowbell.play();
    $(".A").toggleClass("played");
  });

  const clave = new Audio("./assets/audio/808-Clave1.wav");
  $('#clave').mousedown(function(e) {
    e.preventDefault();
    clave.load();
    clave.play();
    $(".S").toggleClass("played");
  });

  const hiHatClosed = new Audio("./assets/audio/808-HiHats01.wav");
  $('#hihatclosed').mousedown(function(e) {
    e.preventDefault();
    hiHatClosed.load();
    hiHatClosed.play();
    $(".D").toggleClass("played");
  });

  const hiHatOpened = new Audio("./assets/audio/808-OpenHiHats05.wav");
  $('#hihatopened').mousedown(function(e) {
    e.preventDefault();
    hiHatOpened.load();
    hiHatOpened.play();
    $(".F").toggleClass("played");
  });

  const clap = new Audio("./assets/audio/808-Clap02.wav");
  $('#clap').mousedown(function(e) {
    e.preventDefault();
    clap.load();
    clap.play();
    $(".Z").toggleClass("played");
  });

  const snare = new Audio("./assets/audio/808-Snare05.wav");
  $('#snare').mousedown(function(e) {
    e.preventDefault();
    snare.load();
    snare.play();
    $(".X").toggleClass("played");
  });

  const conga = new Audio("./assets/audio/808-Conga4.wav");
  $('#conga').mousedown(function(e) {
    e.preventDefault();
    conga.load();
    conga.play();
    $(".C").toggleClass("played");
  });

  const kick = new Audio("./assets/audio/808-Kicks05.wav");
  $('#kick').mousedown(function(e) {
    e.preventDefault();
    kick.load();
    kick.play();
    $(".V").toggleClass("played");
  });

// toggle class on mouseup
  $('.pad').mouseup(function(e) {
    $(this).toggleClass("played");
  });

// trigger audio and toggle class on keydown
  document.addEventListener('keydown', function(e) {
    if (e.which == 65) {
      cowbell.load();
      cowbell.play();
      $(".A").toggleClass("played");
    }
    if (e.which == 83) {
      clave.load();
      clave.play();
      $(".S").toggleClass("played");
    }
    if (e.which == 68) {
      hiHatClosed.load();
      hiHatClosed.play();
      $(".D").toggleClass("played");
    }
    if (e.which == 70) {
      hiHatOpened.load();
      hiHatOpened.play();
      $(".F").toggleClass("played");
    }
    if (e.which == 90) {
      clap.load();
      clap.play();
      $(".Z").toggleClass("played");
    }
    if (e.which == 88) {
      snare.load();
      snare.play();
      $(".X").toggleClass("played");
    }
    if (e.which == 67) {
      conga.load();
      conga.play();
      $(".C").toggleClass("played");
    }
    if (e.which == 86) {
      kick.load();
      kick.play();
      $(".V").toggleClass("played");
    }
  });

// toggle class off on keyup
  document.addEventListener('keyup', function(e) {
    if (e.which == 65) {
      $(".A").toggleClass("played");
    }
    if (e.which == 83) {
      $(".S").toggleClass("played");
    }
    if (e.which == 68) {
      $(".D").toggleClass("played");
    }
    if (e.which == 70) {
      $(".F").toggleClass("played");
    }
    if (e.which == 90) {
      $(".Z").toggleClass("played");
    }
    if (e.which == 88) {
      $(".X").toggleClass("played");
    }
    if (e.which == 67) {
      $(".C").toggleClass("played");
    }
    if (e.which == 86) {
      $(".V").toggleClass("played");
    }
  });

  console.log("working?");
});
