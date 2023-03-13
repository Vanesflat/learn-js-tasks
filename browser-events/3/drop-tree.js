const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach((item) => {
  const span = document.createElement('span');
  item.prepend(span);

  span.append(span.nextSibling);
});

list.addEventListener('click', (evt) => {
  if (evt.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = evt.target.parentNode.querySelector('ul');
  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
});
