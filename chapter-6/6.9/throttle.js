const throttle = (f, ms) => {
  let isTimeout = true;
  let lastCall;

  return function (...args) {

    if (!isTimeout) {
      return lastCall = args;
    }

    f.apply(this, args);

    isTimeout = false;

    setTimeout(() => {
      isTimeout = true;
      f.apply(this, lastCall);
    }, ms);
  };
};
