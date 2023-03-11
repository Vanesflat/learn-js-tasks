const panes = document.querySelectorAll('.pane');

panes.forEach((pane) => {
  pane.style.position = 'relative';

  const closeBtn = document.createElement('button');
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '10px';
  closeBtn.style.right = '15px';
  closeBtn.textContent = '[x]';
  closeBtn.addEventListener('click', () => {
    pane.remove();
  });

  pane.append(closeBtn);
});
