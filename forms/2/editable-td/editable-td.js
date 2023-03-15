const table = document.getElementById('bagua-table');
let isEdit = false;

table.addEventListener('click', (evt) => {
  const td = evt.target.closest('td');

  if (!td || isEdit) {
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.style.width = td.clientWidth + 'px'
  textarea.style.height = td.clientHeight + 'px'
  textarea.value = td.innerHTML;
  td.replaceWith(textarea);
  textarea.focus();

  const editControlWrapper = document.createElement('div');
  editControlWrapper.classList.add('control');

  const okBtn = document.createElement('button');
  okBtn.classList.add('btn-ok');
  okBtn.textContent = 'OK';
  editControlWrapper.append(okBtn);

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('btn-cancel');
  cancelBtn.textContent = 'CANCEL';
  editControlWrapper.append(cancelBtn);

  textarea.after(editControlWrapper);
  isEdit = true;

  okBtn.addEventListener('click', () => {
    td.innerHTML = textarea.value;
    closeEditing();
  })

  cancelBtn.addEventListener('click', closeEditing);

  function closeEditing() {
    editControlWrapper.remove();
    textarea.replaceWith(td);
    isEdit = false;
  }
});
