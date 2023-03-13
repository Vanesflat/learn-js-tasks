const content = document.getElementById('contents');

content.addEventListener('click', (evt) => {
  if (evt.target.closest('a')) {
    const transition = confirm(`Leave for ${evt.target.closest('a').href}?`);

    if (!transition) {
      evt.preventDefault();
    }
  }
});
