const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', ({ key }) => {
  playKey(key);
});

keys.forEach(key => {
  key.addEventListener('transitionend', e => {
    e.currentTarget.classList.remove('playing');
  });
  key.addEventListener('click', e => {
    const key = e.currentTarget.dataset['key'];
    playKey(key);
  });
});

function playKey(key) {
  const audioElement = document.querySelector(`audio[data-key='${key}']`);
  const keyElement = document.querySelector(`.key[data-key='${key}']`);

  if (!audioElement) return;

  audioElement.currentTime = 0;
  audioElement.play();

  keyElement.classList.add('playing');
}
