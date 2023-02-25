const unique = (arr) => {
  const uniqueArr = Array.from(new Set(arr));

  return uniqueArr;
};

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));