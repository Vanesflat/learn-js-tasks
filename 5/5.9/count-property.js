let user = {
  name: 'John',
  age: 30
};

const count = (obj) => Object.entries(obj).length;

alert(count(user));