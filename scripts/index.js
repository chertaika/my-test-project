let audio = document.querySelector('.lead__audio');
let audioButton = document.querySelector('.lead__audio-btn');

audioButton.addEventListener('click', () => {
  let pause = audioButton.classList.contains('lead__audio-btn_pause');
  if(pause) {
    audioButton.classList.remove('lead__audio-btn_pause');
  } else {
    audioButton.classList.add('lead__audio-btn_pause');
  }

  let method = pause ? 'pause' : 'play';
  audio[method]();
})

document.addEventListener("visibilitychange", function() {
  if (document.hidden){
    audio.pause();
    audioButton.classList.remove('lead__audio-btn_pause');
}
});