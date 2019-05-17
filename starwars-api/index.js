import { getPeople } from './services/people.js'
import { getFilms } from './services/films.js'
import { getPlanets } from './services/planets.js'
import { getSpecies } from './services/species.js';
import { getStarships } from './services/starships.js';
import { getVehicles } from './services/vehicles.js';

const $people = document.querySelector('#people')
const $films = document.querySelector('#films')
const $planets = document.querySelector('#planets')
const $species = document.querySelector('#species')
const $starships = document.querySelector('#starships')
const $vehicles = document.querySelector('#vehicles')

$people.onclick = () => getPeople('https://swapi.co/api/people')
$films.onclick = () => getFilms('https://swapi.co/api/films')
$planets.onclick = () => getPlanets('https://swapi.co/api/planets')
$species.onclick = () => getSpecies('https://swapi.co/api/species')
$starships.onclick = () => getStarships('https://swapi.co/api/starships')
$vehicles.onclick = () => getVehicles('https://swapi.co/api/vehicles')