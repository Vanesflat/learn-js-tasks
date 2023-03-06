const fib = (n) => {
  const arrFibonacci = [1, 1];

  for (let i = 0; i < n; i++) {
    arrFibonacci.push(arrFibonacci.at(-1) + arrFibonacci.at(-2));
  }

  return arrFibonacci[n - 1];
};

console.log(fib(77));