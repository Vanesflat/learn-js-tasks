const spy = (fn) => {
  const fnWrap = (...args) => {
    fnWrap.calls.push(args);
    return fn.apply(this, args);
  };

  fnWrap.calls = [];

  return fnWrap;
};
