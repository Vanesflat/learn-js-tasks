const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const sumProperties = (obj) => {
  let sum = 0;

  for (let name in obj) {
    sum += obj[name];
  }

  return sum;
};

alert(sumProperties(salaries));