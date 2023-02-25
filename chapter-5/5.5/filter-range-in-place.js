let arr = [5, 3, 8, 1];

const filterRangeInPlace = (arr, a, b) => {
  arr.forEach((el) => {
    if (el < a || el > b) {
      arr.splice(arr.indexOf(el), 1);
    }
  });
}

filterRangeInPlace(arr, 1, 4);

alert(arr);