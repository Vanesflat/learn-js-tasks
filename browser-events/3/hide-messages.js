const container = document.getElementById('container');

container.addEventListener('click', (evt) => {
  if (evt.target.tagName !== 'BUTTON') {
    return;
  }

  evt.target.closest('.pane').remove();
});
