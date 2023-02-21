const calculator = {
  read(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  },

  sum() {
    return this.value1 + this.value2;
  },

  mul() {
    return this.value1 * this.value2;
  }
};

calculator.read(4, 3);
alert(calculator.sum());
alert(calculator.mul());