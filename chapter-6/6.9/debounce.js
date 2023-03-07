const debounce = (f, ms) => {
  let isTimeout = false;

  return function () {
    if (isTimeout) {
      return;
    }

    f.apply(this, arguments);

    isTimeout = true;
    setTimeout(() => isTimeout = false, ms);
  };
}
