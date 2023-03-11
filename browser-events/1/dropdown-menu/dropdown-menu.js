const textBtn = document.querySelector('p');
const list = document.querySelector('ul');

textBtn.addEventListener('click', () => {
  textBtn.classList.toggle('active');
  list.classList.toggle('show');
});
