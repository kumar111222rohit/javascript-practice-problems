/*debouncing makes an api call only when the 
difference between two key events(or some event) 
has reached the given value*/

let counter = 0;
const getData = () => {
  console.log("counter is ", counter++);
};

const debounce = function(function,delay){
    let timer;
    return function(){
        let context= this;
        let args=arguments;
        clearTimeout(timer);
        timer= setTimeout(()=>{
            getData.apply(context,args);
        },delay)
    }
} 
const myBetterFunc= debounce(getData(),300)