let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

const getAverageAge = (users) => {
  const sumAge = users.reduce((sum, user) => sum += user.age, 0);

  return Math.floor(sumAge / users.length);
}

alert(getAverageAge(arr));