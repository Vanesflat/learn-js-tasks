const mouse = document.getElementById('mouse');
mouse.tabIndex = 0;

mouse.addEventListener('click', () => {
  const coordinates = mouse.getBoundingClientRect();

  mouse.style.top = `${coordinates.top}px`;
  mouse.style.left = `${coordinates.left}px`;

  mouse.style.position = 'fixed';
});

mouse.addEventListener('keydown', (evt) => {
  switch (evt.key) {
    case 'ArrowLeft':
      mouse.style.left = `${parseInt(mouse.style.left) - mouse.offsetWidth}px`;
      return;
    case 'ArrowUp':
      mouse.style.top = `${parseInt(mouse.style.top) - mouse.offsetHeight}px`;
      return;
    case 'ArrowRight':
      mouse.style.left = `${parseInt(mouse.style.left) + mouse.offsetWidth}px`;
      return;
    case 'ArrowDown':
      mouse.style.top = `${parseInt(mouse.style.top) + mouse.offsetHeight}px`;
      return;
  }
});
