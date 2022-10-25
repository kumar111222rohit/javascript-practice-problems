// here we try to sort an array of objects based on primary and secondary sort conditions.
// if the primary condition fials we use the secondary conditino to sort

//assuming arr is an array of objects:
let arr = [
  { firstName: "fsd", lName: "dwef" },
  { firstName: "fwe", lName: "fewf" },
];

let doubleSortArray = function (arr, prop1, prop2) {
  let myArr = [...arr].sort((a, b) => {
    if (a[prop1] === b[prop1]) {
      if (a[prop2] === b[prop2]) return 0;
      return a[prop2] < b[prop2] ? -1 : 0;
    }
    return a[prop1] < b[prop1] ? -1 : 0;
  });
  return myArr;
};
