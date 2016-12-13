const inputs = document.querySelectorAll('.controls');

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
  const value = this.value + (this.dataset.suffix || '');
  const name = this.name;
  document.documentElement.style.setProperty(`--${name}`, value);
}
