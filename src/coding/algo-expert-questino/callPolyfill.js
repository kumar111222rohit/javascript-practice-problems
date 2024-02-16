// call apply and bind
Function.prototype.myCall = function (thisContext, ...args) {
  const symbol = new Symbol(); // gives a unique key
  thisContext[symbol] = this;
  const returnValue = thisContext[symbol](...args);
  delete symbol;
  return returnValue;
};

Function.prototype.myApply = function (thisContext, args = []) {
  const symbol = new Symbol();
  thisContext[symbol] = this;
  const returnValue = thisContext[symbol](...args[0]);
  delete symbol;
  return returnValue;
};
Function.prototype.myBindMethod = function (...arg1) {
  let obj = this;
  let param = arg1.slice(1);
  return function (...arg2) {
    obj.apply(arg1[0], [...param, ...arg2]);
  };
};

let person = {
  firstname: "Kirtesh",
  lastname: "bansal",
};

let printName = function (country) {
  console.log(this.firstname + " " + this.lastname + " from " + country);
};
