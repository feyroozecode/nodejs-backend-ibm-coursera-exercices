const fs = require('fs')

// readFile in asynchrone mode
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})
console.log('Reading file...')

// read file with promises
fs.promises.readFile('file.txt', 'utf8').then(data => {
    console.log('Reading file with promises...');
    console.log(data)
} ).catch(err => {
    console.log(err)
})