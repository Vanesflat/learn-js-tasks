let items = document.querySelectorAll('li');

items.forEach((item) => {
  const descendantsCount = item.querySelectorAll('li').length;

  item.firstChild.data += descendantsCount ? ` [${descendantsCount}]` : '';
});
