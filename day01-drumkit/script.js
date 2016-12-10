window.addEventListener('keydown', e => {
  const key = e.key;
  const audio = document.querySelector(`audio[data-key='${key}']`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
});
