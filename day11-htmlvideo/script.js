const video = document.querySelector('video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress .bar');
const playButton = document.querySelector('.play-button');

const PAUSE_ICON = '⏸';
const PLAY_ICON = '▶';

progress.addEventListener('mousedown', handleProgreseMouseDown);
playButton.addEventListener('click', handlePlayButtonClick);
video.addEventListener('click', handlePlayButtonClick);
video.addEventListener('timeupdate', handleTimeUpdate);
video.addEventListener('play', () => {
  playButton.innerHTML = PAUSE_ICON;
  playButton.classList.add('playing');
});
video.addEventListener('pause', () => {
  playButton.innerHTML = PLAY_ICON;
  playButton.classList.remove('playing');
});
video.volume = 0;

function handlePlayButtonClick() {
  if (video.paused) {
    video.play();
  }  else {
    video.pause();
  }
}

function handleTimeUpdate() {
  const percentComplete = this.currentTime / this.duration * 100;
  progressBar.style.width = `${percentComplete}%`;
}

function handleProgreseMouseDown(e) {
  const percentPosition = e.offsetX / this.clientWidth;
  video.currentTime = Math.floor(video.duration * percentPosition);
}