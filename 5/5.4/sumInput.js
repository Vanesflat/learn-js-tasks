const sumInput = () => {
  let num;
  const arr = [];
  do {
    num = prompt('Введите число');
    if (!isFinite(num) || num === null || num === '') {
      break;
    }

    arr.push(+num);

  } while (isFinite(num))

  return arr.reduce((sum, num) => sum += num, 0);
}

alert(sumInput());