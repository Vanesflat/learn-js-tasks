function Accumulator(startingValue) {
  return {
    value: startingValue,
    read() {
      userValue = +prompt('Введите число');
      return this.value += userValue;
    }
  }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);