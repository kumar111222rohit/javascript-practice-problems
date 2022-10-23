/* throttling will make the api call
 only when the difference between
two api calls is some time delay*/
/* initially the function will be called but 
for it to be called next time we should compare 
if the limit has reached to be called.*/

const loggerFunction=()=>{
    console.log("better logger function")
}

//lets throttle
const throttle =function(argFunction, limit){
    let flag=true;// making a closure
    return function(){
        let context= this;
        let args= arguments;
        if (flag){
            argFunction.apply(context,args)
            flag=false;
        }
        setTimeout(()=>{
            flag=true;
        },limit)
    }
}
window.addEventListener("resize",betterLoggerFunction);
