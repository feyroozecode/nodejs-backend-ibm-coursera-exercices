let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 650);
    
});

console.log('Start Promise');

// log before promise is resolved
console.log(myPromise);

// log after promise is resolved
myPromise.then((successMessage) => {
    console.log(`From Promise Calback ${successMessage}`);
});

// log after promise is resolved
console.log('After promise is resolved');