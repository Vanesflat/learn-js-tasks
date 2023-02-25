const copySorted = (arr) => {
  const sortedArr = [...arr];

  return sortedArr.sort();
};

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);