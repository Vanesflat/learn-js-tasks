const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const printListReverseCycle = (list) => {
  const arr = [];

  while (list) {
    arr.push(list.value);
    list = list.next;
  }

  arr.reverse().forEach((el) => console.log(el));
};

const printListReverseRecursion = (list) => {
  if (list.next) {
    printListReverseRecursion(list.next);
  }

  console.log(list.value);
}

printListReverseCycle(list);
console.log('_____________________________');
printListReverseRecursion(list);