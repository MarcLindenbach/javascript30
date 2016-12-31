const konamiCode = ['ArrowUp',
                    'ArrowUp',
                    'ArrowDown',
                    'ArrowDown',
                    'ArrowLeft',
                    'ArrowRight',
                    'ArrowLeft',
                    'ArrowRight',
                    'b',
                    'a'];
const keyCodesDiv = document.querySelector('.key-codes');
const placeholderDiv = document.querySelector('.placeholder');
document.addEventListener('keydown', handleKeyPress);

let keyCodes = [];
function pushKey(key) {
  keyCodes = [...keyCodes, key];
  if (keyCodes.length > 10) {
    [_, ...keyCodes] = keyCodes;
  }
}

function handleKeyPress({ key }) {
  placeholderDiv.classList.add('hidden');
  pushKey(key);

  const keyDiv = document.createElement('div');
  keyDiv.innerHTML = getUnicodeCharacter(key);
  keyCodesDiv.appendChild(keyDiv);
  keyDiv.className = 'fade-in';

  if (keyCodesDiv.children.length > 10) {
    keyCodesDiv.removeChild(keyCodesDiv.children[0]);
  }

  if (isCodeComplete()) {
    document.querySelector('body').classList.add('winner');
  } else {
    document.querySelector('body').classList.remove('winner');
  }
}

function isCodeComplete() {
  return (keyCodes.length === konamiCode.length && 
          konamiCode.every((v, i) => v === keyCodes[i]));
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