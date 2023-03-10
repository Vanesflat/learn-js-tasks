const body = document.body;
const list = document.createElement('ul');

body.append(list);

while (true) {
  let text = prompt('Введите текст для элемента', '');

  if (!text) {
    break;
  }

  const item = document.createElement('li');
  item.textContent = text;
  list.append(item);
}
