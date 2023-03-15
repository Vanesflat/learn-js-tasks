const div = document.querySelector('.view');
const textarea = document.createElement('textarea');
textarea.classList.add('edit');

div.addEventListener('click', () => {
  textarea.value = div.innerHTML;

  textarea.addEventListener('blur', () => {
    div.innerHTML = textarea.value;
    textarea.replaceWith(div);
  });

  textarea.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      textarea.blur();
    }
  });

  div.replaceWith(textarea);
  textarea.focus();
})
