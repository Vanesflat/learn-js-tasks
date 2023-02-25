let arr = [1, 2, 3];

const shuffle = (array) => {
  let amountElements = array.length;
  let currentElement;
  let i;

  while (amountElements) {
    i = Math.floor(Math.random() * amountElements--);

    currentElement = array[amountElements];
    array[amountElements] = array[i];
    array[i] = currentElement;
  }

  return array;
}

alert(shuffle(arr));