import People from './service/people.js'

class StarWars {
    constructor(people){
        this.urlBase = 'https://swapi.co/api/'
        this.people = people
        this.btnPeople = document.querySelector('#people')  

        this.btnPeople.addEventListener('click', this.getPeople)
    }
    
    get getPeople(){
        // console.log(this.people.getPeople(this.urlBase))
        console.log(this.people)
        console.log('Olpasasd')
    }
}

const app = new StarWars(new People())