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

const printListCycle = (list) => {

  while (list) {
    console.log(list.value);
    list = list.next;
  }
};

const printListRecursion = (list) => {
  console.log(list.value);

  if (list.next) {
    printListRecursion(list.next);
  }
}

printListCycle(list);
console.log('_____________________________');
printListRecursion(list);