function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  },

    this.calculate = (str) => {
      const arr = str.split(' ');

      if (isNaN(arr[0]) || isNaN(arr.at(-1))) {
        return NaN;
      }

      return this.methods[arr[1]](+arr[0], +arr.at(-1));
    },

    this.addMethod = (sign, fn) => {
      this.methods[sign] = fn;
    }
}

let calc = new Calculator;

alert(calc.calculate('3 + 7'));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

alert(powerCalc.calculate('2 ** 3'));
alert(powerCalc.calculate('2 * 3'));
alert(powerCalc.calculate('8 / 2'));