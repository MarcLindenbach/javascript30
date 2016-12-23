const video = document.querySelector('video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress .bar');
const playButton = document.querySelector('#play');

playButton.addEventListener('click', handlePlayButtonClick);

progress.addEventListener('mousedown', handleProgreseMouseDown);

video.addEventListener('click', handlePlayButtonClick);
video.addEventListener('timeupdate', handleTimeUpdate);
video.addEventListener('play', () => playButton.innerHTML = '⏸');
video.addEventListener('pause', () => playButton.innerHTML = '▶');
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