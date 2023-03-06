const sumToCycle = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

const sumToRecursion = (n) => n === 1 ? 1 : n + sumToRecursion(n - 1);

const sumToArithetic = (n) => (n * (n + 1)) / 2;
