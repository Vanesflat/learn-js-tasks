let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
};

const topSalary = (salaries) => {
  let topper = null;
  let maxSalary = 0;

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topper = name;
    }
  }

  return topper;
};

alert(topSalary(salaries));