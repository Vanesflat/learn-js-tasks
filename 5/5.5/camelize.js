const camelize = (str) =>
  str.split('-').map((word) => {
    if (str.indexOf(word) > 0) {
      return word[0].toUpperCase() + word.slice(1);
    }
    return word;
  }).join('');

alert(camelize('-webkit-transition'));
alert(camelize('list-style-image'));