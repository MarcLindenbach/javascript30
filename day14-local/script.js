const addStickyButton = document.querySelector('.add-sticky');
const stickiesList = document.querySelector('.stickies');
let stickiesData = JSON.parse(localStorage.getItem('stickyData')) || [{
  title: 'Click Me!',
  content: 'You can type whatever you want here',
  visible: true
},
{
  title: 'We\'re persistent!',
  content: 'Change us and refresh your browser',
  visible: true
}];
addStickyButton.addEventListener('click', handleAddStickyClick);

updateView();
function updateView() {
  renderStickies();
  updateLocalStorage();
}

function handleAddStickyClick() {
  stickiesData = [...stickiesData, {
    title: 'New Sticky',
    content: '',
    visible: true
  }];
  updateView();
}

function updateLocalStorage() {
  const visibleStickies = stickiesData.filter(sticky => sticky.visible);
  localStorage.setItem('stickyData', JSON.stringify(visibleStickies));
}

function renderStickies() {
  stickiesData.forEach(({ title, content, visible }, key) => {
    const sticky = stickiesList.querySelector(`[data-key="${key}"]`);
    if (sticky) {
      updateStickyElement(sticky, title, content, visible);
      return;
    }
    stickiesList.appendChild(createStickyElement(title, content, visible, key));  
  });
}

function updateStickyElement(sticky, title, content, visible) {
  sticky.hidden = !visible;
  const header = sticky.querySelector('input');
  header.value = title;
  const text = sticky.querySelector('textarea');
  text.innerText = content;
}

function createStickyElement(title, content, visible, key) {
  const sticky = document.createElement('li');
  sticky.className = 'sticky';
  sticky.dataset.key = key;
  sticky.hidden = !visible;

  const header = document.createElement('input');
  header.value = title;
  header.addEventListener('input', handleStickyTitleChange(key));

  const text = document.createElement('textarea');
  text.addEventListener('input', handleStickyContentChange(key));
  text.innerText = content;

  const remove = document.createElement('div');
  remove.className = 'remove';
  remove.innerText = '✗';
  remove.addEventListener('click', handleRemoveSticky(key));

  sticky.appendChild(header);
  sticky.appendChild(text);
  sticky.appendChild(remove);
  return sticky;
}

function handleStickyTitleChange(key) {
  return function(e) {
    stickiesData[key].title = e.target.value;
    updateView();
  }
}

function handleStickyContentChange(key) {
  return function(e) {
    stickiesData[key].content = e.target.value;
    updateView();
  }
}

function handleRemoveSticky(key) {
  return function () {
    stickiesData[key].visible = false;
    updateView();
  }
}