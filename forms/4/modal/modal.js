const body = document.body;
const form = document.getElementById('prompt-form');
const container = document.getElementById('prompt-form-container');
const showBtn = document.getElementById('show-button');

const showModal = () => {
  let overlay = document.createElement('div');
  overlay.classList.add('overlay');

  body.classList.add('modal');
  body.append(overlay);
  container.style.display = 'block';
};

const hideModal = () => {
  if (document.querySelector('.overlay')) {
    document.querySelector('.overlay').remove();
  }

  body.classList.remove('modal');
  container.style.display = 'none';
};

const showPrompt = (html, callback) => {
  showModal();
  document.getElementById('prompt-message').innerHTML = html;
  form.text.value = '';

  const submit = (value) => {
    hideModal();
    document.removeEventListener("keydown", escapeForm);
    callback(value);
  }

  function escapeForm(evt) {
    if (evt.key === 'Escape' || evt.target.name === 'cancel') {
      submit(null);
    }
  }

  document.addEventListener('keydown', escapeForm);

  form.cancel.addEventListener('click', escapeForm);

  form.addEventListener('submit', () => {
    let value = form.text.value;
    if (value.length === 0) {
      return;
    }

    submit(value);
    return false;
  });
}

showBtn.addEventListener('click', () => {
  showPrompt("Введите что-нибудь<br>...умное :)", function (value) {
    alert(value);
  });
})


