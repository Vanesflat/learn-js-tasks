const aclean = (arr) => {
  const map = new Map();

  arr.forEach((word) => {
    const sortWord = word.toLowerCase().split('').sort().join('');
    map.set(sortWord, word);
  });

  return Array.from(map.values());
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));