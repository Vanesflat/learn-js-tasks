let number = prompt('Введите число больше, чем 100');

while (number <= 100) {
  if (!number) {
    break;
  }

  number = prompt('Введите еще раз');
}