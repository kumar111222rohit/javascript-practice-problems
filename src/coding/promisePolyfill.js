Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

};
Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    let rejectedCount = 0;
    promises.forEach((promise) => {
      promise
        .then(resolve)
        .catch(_ => {
          rejectedCount++;
          if (rejectedCount === promises.length) {
            reject("all promises rejected");
          }
        });
    });
  });
};

Promise.myAll= function(promises){
let results=[];
let resolvedCount=0;
    return new Promise((resolve,reject)=>{
        promises.forEach((promise,i)=>{
            promise.then(value=>{
                resolvedCount++;
                results[i]= value;
                if(resolvedCount===promises.length){
                    resolve(results);
                }
            })
            .catch(reject)
        })
    })
}
Promise.myAllSettled = function (promises) {
    // Write your code here.
  let settledCount=0;
    const reuslts=[];
    return new Promise((resolve,reject)=>{
  
      promises.forEach((promise,i)=>{
        promise.then(value=>{
          reuslts[i]={status:'fulfilled',value}
        })
        .catch(error=>{
         reuslts[i]={status:'rejected',error}
        })
        .finally(()=>{
          settledCount++;
          if(settledCount===promises.length){
            resolve(reuslts);
          }
        })
      })
    })
  };