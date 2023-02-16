const num = prompt('Введите число');
const degree = prompt('Введите степень');

const pow = (num, degree) => {

  if (degree < 1) {
    alert('Степень не поддерживается');
    return;
  }

  return Math.pow(num, degree);
};

alert(pow(num, degree));