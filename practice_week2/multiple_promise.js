let promose1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1');
    }, 650);
});

let promose2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2');
    }, 650);
}
);

promose1.then((successMessage) => {
    console.log(`From Promise Calback ${successMessage}`);
});

promose2.then((successMessage) => {
    console.log(`From Promise 2 Calback ${successMessage}`);
}
);