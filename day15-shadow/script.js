const shadows = document.querySelectorAll('.shadow');

document.addEventListener('mousemove', debounce(handleMouseMove));

function handleMouseMove({ clientX, clientY}) {
  shadows.forEach(shadow => {
    const boundingRect = shadow.getBoundingClientRect();
    const x = boundingRect.left + ((boundingRect.right - boundingRect.left) / 2);
    const y = boundingRect.top + ((boundingRect.bottom - boundingRect.top) / 2);

    const shadowX = (x - clientX) / (window.innerWidth / 20);
    const shadowY = (y - clientY) / (window.innerHeight / 20);
    const blur = Math.max(Math.abs(shadowX), Math.abs(shadowY)) * 2;

    shadow.style.textShadow = `${shadowX}px ${shadowY}px ${blur}px #FFC107`;  
  });
}

function debounce(func, wait=1, immediate=true) {
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