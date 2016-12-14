const panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('click', handleClick));

function handleClick() {
  let addClass = !this.classList.contains('selected');
  panels.forEach(panel => panel.classList.remove('selected'));
  if (addClass) this.classList.add('selected');
}
