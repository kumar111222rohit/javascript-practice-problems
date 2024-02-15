// define custom reduce()
if (!Array.prototype.customReduce) {
  Array.prototype.customReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      if (i == 0 && initialValue === undefined) {
        accumulator = this[i];
      } else {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }

    return accumulator;
  };
}

// declare an array
var numbers = [1, 2, 3, 4, 5];
//function getSum(total, num) {
//  return total + num;
//}
//console.log(numbers.customReduce(getSum))

// call custom reduce() on array to get sum of all elements
console.log(numbers.customReduce((total, num) => total + num, 0));
// prints 15
