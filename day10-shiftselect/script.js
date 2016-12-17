const inputs = document.querySelectorAll('input');
const inputsArr = Array.prototype.slice.call(inputs);
inputs.forEach(e => e.addEventListener('click', handleClick));

let lastClickedIndex = -1;

function handleClick({ shiftKey }) {
  const index = inputsArr.indexOf(this);

  if (!shiftKey) {
    lastClickedIndex = this.checked ? index : -1;
    return;
  } 

  if (lastClickedIndex >= 0) {
    const low = Math.min(lastClickedIndex, index);
    const high = Math.max(lastClickedIndex, index);

    for (let i=low; i<=high; i++) {
      inputsArr[i].checked = true;
    }

    lastClickedIndex = index;
  }
}