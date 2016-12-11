const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = ((seconds * 360) / 60) - 90;
  const minutesDegrees = ((minutes * 360) / 60) - 90;
  const hoursDegrees = ((hours * 360) / 12) - 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setDate();
setInterval(setDate, 1000);

var pattern = Trianglify({
  width: window.innerWidth,
  height: window.innerHeight,
  cell_size: 40
});

document.body.appendChild(pattern.canvas());
