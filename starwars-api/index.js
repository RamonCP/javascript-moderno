const StarWarsAPI = require('star-wars-api')

function start() {
    const contentAPi = new StarWarsAPI()
    contentAPi.get('https://swapi.co/api/people')
    .then(console.log)
}

start()