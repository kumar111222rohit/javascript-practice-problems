if (!Array.prototype.customFilter) {
  Array.prototype.customFilter = function (callback, context) {
    var newArray = [];
    // iterate array elements
    for (let item of this) {
      // pass each element to callback and if elements that pass the test push response to new array
      if (callback.call(context, item)) {
        newArray.push(item);
      }
    }
    // return final array
    return newArray;
  };
}
