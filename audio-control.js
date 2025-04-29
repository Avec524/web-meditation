let audio = new Audio();
function playSound(src) {
  if (!audio.paused) audio.pause();
  audio.src = src;
  audio.play();
}
