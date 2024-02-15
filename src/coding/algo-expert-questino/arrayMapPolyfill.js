// define custom map()
if (!Array.prototype.customMap) {
  Array.prototype.customMap = function (callback) {
    let newArray = [];
    // iterate array elements
    for (let item of this) {
      // pass each element to callback and push response to new array
      newArray.push(callback(item));
    }
    // return final array
    return newArray;
  };
}

// declare an array
const arr = [10, 20, 30, 40];
// call custom map() on array to square each element or perform any other operation
const squaredArray = arr.customMap((i) => i * i);
// prints [100,400,900,1600]
console.log(squaredArray);
