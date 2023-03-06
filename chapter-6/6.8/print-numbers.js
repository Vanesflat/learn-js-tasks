const printNumbersInterval = (from, to) => {
  let currentNumber = from;

  const timer = setInterval(() => {
    console.log(currentNumber);
    if (currentNumber === to) {
      clearInterval(timer);
    }

    currentNumber++;
  }, 1000);
};

const printNumbersTimeout = (from, to) => {
  let currentNumber = from;

  setTimeout(fn = () => {
    console.log(currentNumber);
    if (currentNumber < to) {
      setTimeout(fn, 1000);
    }

    currentNumber++;
  }, 1000);
}

printNumbersTimeout(1, 10);