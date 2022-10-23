//polyfill for bind
// bind returns a function and doesnt calls it.

let name = {
  firstName: "rohit",
  lastName: "kumar"
};
let printName = function () {
  console.log(this.firstName + this.lastName);
};
let printMyName = printName.bind(name);
printMyName();
