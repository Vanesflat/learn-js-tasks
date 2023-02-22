const truncate = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 1) + '...';
  }

  return str;
};

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));