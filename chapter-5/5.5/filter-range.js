let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
  const filteredArr = arr.filter((el) => el >= a && el <= b);

  return filteredArr;
}

let filtered = filterRange(arr, 1, 4);

alert(filtered);

alert(arr);