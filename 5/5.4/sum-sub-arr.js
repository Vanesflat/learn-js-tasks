const getMaxSubSum = (arr) => {
  let maxSum = 0;

  arr.forEach((num) => {
    if (Math.sign(num) >= 0) {
      sum += num;
      maxSum = Math.max(sum, maxSum);
    } else {
      sum = 0;
    }
  })

  return maxSum;
}