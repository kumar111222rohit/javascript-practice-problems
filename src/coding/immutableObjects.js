// here closure is formed 
// we are returning a new object which doesnt points to tghe samne memory location hence 
// other objects cant alter the value in it.
let getPtivateObj=function (){
    let privateObj={
        firstName="abc",
        lastName="xyz",
    }
     
    return function(){
        return {...privateObj};
    }
}();