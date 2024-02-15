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
Function.prototype.myBind = function (thisContext, ...args) {
  const symbol = new Symbol();
  thisContext[symbol] = this;

  const returnFunc = function (...newArgs) {
    return thisContext[symbol](...args, ...newArgs);
  };

  delete symbol;
  return returnFunc;
};

let person = {
  firstname: "Kirtesh",
  lastname: "bansal",
};

let printName = function (country) {
  console.log(this.firstname + " " + this.lastname + " from " + country);
};
