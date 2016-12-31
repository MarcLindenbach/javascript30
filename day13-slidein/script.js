const images = document.querySelectorAll('img');

window.addEventListener('scroll', debounce(checkSlide));

checkSlide();
function checkSlide() {
  const scrollTop = window.scrollY;
  const scrollBottom = scrollTop + window.innerHeight;

  images.forEach(image => {
    const scrollInAt = image.offsetTop + (image.height / 2);
    if (scrollBottom > scrollInAt) {
      image.classList.add('active');
    }

    const imageTop = image.offsetTop;
    const imageBottom = image.offsetTop + image.height;
    if (scrollTop > imageBottom || scrollBottom < imageTop) {
      image.classList.remove('active');
    }
  });
}

function debounce(func, wait=10, immediate=true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};