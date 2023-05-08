
/**
 * This file is used to fetch data from the Public APIs with axios  
 * and parse it to a table with console.table
 */

const axios = require('axios');

// fetch data from API
const connectToUrl = (url) => {
    const req = axios.get(url);
    console.log(req);
    req.then((response) => {
        let listOfEntries = response.data.entries;
        listOfEntries.forEach((entry) => {
            // parse to table 
            console.table(entry);
        });
        
    }) 
    .catch((err) => {
        console.log(err);
    });
}

connectToUrl('https://api.publicapis.org/entries');