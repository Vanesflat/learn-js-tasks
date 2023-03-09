Function.prototype.defer = function (ms) {
  let fn = this;
  return function (...args) {
    setTimeout(() => fn.apply(this, args), ms);
  }
};

function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2);
