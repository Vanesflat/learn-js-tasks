const container = document.getElementById('container');
const data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

const createTree = (container, data) => {
  const list = createList(data);

  container.append(list);
}

function createList(data) {
  if (!Object.keys(data).length) {
    return;
  }

  const list = document.createElement('ul');

  for (let key in data) {
    const item = document.createElement('li');
    item.innerHTML = key;

    const nestedList = createList(data[key]);
    if (nestedList) {
      item.append(nestedList);
    }

    list.append(item);
  }

  return list;
}

createTree(container, data);
