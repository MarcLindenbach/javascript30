const keyCodesDiv = document.querySelector('.key-codes');

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress({ key }) {
  const keyDiv = document.createElement('div');
  keyDiv.innerHTML = getUnicodeCharacter(key);
  
  keyCodesDiv.appendChild(keyDiv);
  keyDiv.className = 'fade-in';
  keyDiv.dataset.key = key;

  if (keyCodesDiv.children.length > 10) {
    keyCodesDiv.removeChild(keyCodesDiv.children[0]);
  }

  const percent = getMatchPercent();
  if (percent === 1) {
    document.querySelector('body').classList.add('winner');
  } else {
    document.querySelector('body').classList.remove('winner');
  }
}

function getMatchPercent() {
  let konamiCode = ['ArrowUp',
                    'ArrowUp',
                    'ArrowDown',
                    'ArrowDown',
                    'ArrowLeft',
                    'ArrowRight',
                    'ArrowLeft',
                    'ArrowRight',
                    'b',
                    'a'].reverse();

  let keyCodes = [];
  for (let child of keyCodesDiv.children) {
    keyCodes.push(child.dataset.key);
  }
  keyCodes.reverse();
  
  let percent = 0;
  for (let i=0; i<10; i++) {
    if (konamiCode[i] === keyCodes[i]) {
      percent++;
    }
  }
  
  return percent / 10;
}

function getUnicodeCharacter(key) {
  switch (key) {
    case 'ArrowRight':
      return '⇨';
    case 'ArrowDown':
      return '⇩';
    case 'ArrowLeft':
      return '⇦';
    case 'ArrowUp':
      return '⇧';
    default:
      return key;
  }
}