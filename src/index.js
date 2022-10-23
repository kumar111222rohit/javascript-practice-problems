// //polyfill for bind
// // bind returns a function and doesnt calls it.

let name1 = {
  firstName: "rohit",
  lastName: "kumar"
}
let printName = function (a,b,c) {
  console.log(this.firstName + " " + this.lastName+a+b)
}
let printMyName = printName.bind(name1);
// printMyName("arg1","arg2");

//own bind method
Function.prototype.myBindMethod = function (...arg1) {
let obj= this;
let param= arg1.slice(1);
  return function (...arg2) {
    obj.apply(arg1[0],[...param, ...arg2]);
  }
}
let myPrintName = printMyName.myBindMethod(name1, [" arg1"," myarg1","myanother arg1"])
myPrintName([" arg2", " myarg2"," myanother arg2"]);
