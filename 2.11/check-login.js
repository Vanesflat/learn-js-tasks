const login = prompt('Введите логин');

if (login === 'Админ') {
  const password = prompt('Введите пароль');

  if (password === 'Я Главный') {
    alert('Здравствуйте');
  } else if (password !== 'Я Главный' && password !== '' && password !== null) {
    alert('Неверный пароль')
  } else {
    alert('Отменено');
  }

} else if (login !== 'Админ' && login !== '' && login !== null) {
  alert('Я вас не знаю')
} else {
  alert('Отменено');
}