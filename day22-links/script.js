const links = document.querySelectorAll('nav ul li');
const menu = document.querySelector('nav .menu');

links.forEach(link => link.addEventListener('mouseenter', handleMouseEnter));
links.forEach(link => link.addEventListener('mouseleave', handleMouseLeave));


setMenuPosition(links[0].getBoundingClientRect());
function handleMouseEnter() {
  setMenuPosition(this.getBoundingClientRect());
  menu.style.opacity = 1;
}

function handleMouseLeave() {
  menu.style.opacity = 0;
}

function setMenuPosition({ top, left, width, height }) {
  menu.style.top = `${top}px`;
  menu.style.left = `${left}px`;
  menu.style.width = `${width}px`;
  menu.style.height = `${height}px`;
}
