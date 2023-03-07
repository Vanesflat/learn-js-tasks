const delay = (f, ms) =>
  function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };

