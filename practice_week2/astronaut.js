
// parse json from http://api.open-notify.org/astros.json 
// and display the number of astronauts currently in space
// and the names of those astronauts
const API_URL = 'http://api.open-notify.org/astros.json';

/// parse the API response and return an array of astronauts in console.table
const parseAstronauts = (json) => {
    const astronauts = json.people.map((person) => {
        return {
            name: person.name,
            craft: person.craft
        }
    })
    console.log('Astronauts in space: ' + json.number);
    console.table(astronauts);
}

module.exports = fetch(API_URL).then((response) => {
    return response.json();
}).then((json) => {
    parseAstronauts(json);
}).catch((err) => {
    console.log(err);
})

// by Ibrahim-Ahmad 