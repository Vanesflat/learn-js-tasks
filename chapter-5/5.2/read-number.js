const readNumber = () => {
  let value;

  do {
    value = prompt('Введите числовое значение');
  } while (!isFinite(value));

  if (value === '' || value === null) {
    return null;
  }

  return +value;
};

alert(readNumber());