window.addEventListener('keydown', ({ key }) => {
  const audioElement = document.querySelector(`audio[data-key='${key}']`);
  const keyElement = document.querySelector(`.key[data-key='${key}']`);

  if (!audioElement) return;

  audioElement.currentTime = 0;
  audioElement.play();

  keyElement.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', e => {
    e.target.classList.remove('playing');
  });
});
