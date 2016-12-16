const MIN_LINE_WIDTH = 1;
const LINE_WIDTH_STEP = .5;
const MAX_LINE_WIDTH = 80;
const HUE_MAX = 360;

const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;

let isDrawing = false;
let lastPos = {
  x: 0,
  y: 0
};
let lineWidth;
let lineStep;
let hue = 0;

function draw({offsetX, offsetY}) {
  if (!isDrawing) return;
  context.beginPath();
  context.moveTo(lastPos.x, lastPos.y);
  context.lineTo(offsetX, offsetY);
  context.lineWidth = lineWidth;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.stroke();

  lastPos = {
    x: offsetX,
    y: offsetY
  };
  lineWidth += lineStep;

  if (lineWidth >= MAX_LINE_WIDTH || lineWidth <= MIN_LINE_WIDTH) {
    lineStep *= -1;
  }

  if (hue < HUE_MAX) {
    hue++;
  } else {
    hue = 0;
  }
}

function startDrawing({offsetX, offsetY}) {
  isDrawing = true;
  lastPos = {
    x: offsetX,
    y: offsetY
  };
  lineWidth = MIN_LINE_WIDTH;
  lineStep = LINE_WIDTH_STEP;
}

function stopDrawing() {
  isDrawing = false;
}
