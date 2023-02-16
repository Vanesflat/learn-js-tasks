const n = 10;

for (let i = 2; i <= n; i++) {
  let counter = 0;
  for (let j = 2; j <= n; j++) {
    if (i % j === 0) {
      counter++;
    }
  }

  if (counter === 1) {
    alert(i);
  }
}