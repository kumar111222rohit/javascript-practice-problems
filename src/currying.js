/* an exmaple to demonstrate function currying
// Currying is a function that takes one argument at a time and
 returns a new function expecting the next argument. */
 
 //currying using bind
 
 let multiply= function(x,y){
     console.log( x*y);
 }
 
 let multiplyByTwo = multiply.bind(this,2);
 multiplyByTwo(5);
 
 let multiplyByThree = multiply.bind(this,3);
 multiplyByThree(6)
 
 //using function closure
 let multiplyClosure=function (x){
     return function(y){
         console.log(x*y)
     }
 }
 
 let multiplyByTwoWithCLosure=multiplyClosure(2)
 multiplyByTwoWithCLosure(3)