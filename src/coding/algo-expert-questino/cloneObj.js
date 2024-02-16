let obj = {
  name: "rohit",
  lname: "kumar",
};

const cloneObj = (myObj) => {
  return JSON.parse(JSON.stringify(myObj));
};

console.log(obj);
let clonedObj = cloneObj(obj);
console.log(clonedObj);

for (let i in obj) {
  // for in loop can be use in non array objects
  if (obj.hasOwnProperty(i)) {
    console.log(obj[i]);
  }
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
//object cloning
let obj2 = {
  lname: "kumar",
};
let obj3 = obj2; // pass by reference
obj3.lname = "jonny";
console.log(obj2);
let obj4 = Object.assign({}, obj2); // pass by value but shallow copy
obj4.lname = "diqwu";
console.log(obj4);
console.log(obj2);

//best way
let obj5 = JSON.parse(JSON.stringify(obj2)); // it copiues nested vaolue as well
console.log("obj5", obj5);

// object to array
// we do Object.entries(obj)

// array to object
//we do Object.fronEntries(obj)
