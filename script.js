// https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = '1393093597937564'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`


// https://www.superheroapi.com/api.php/1393093597937564/search/batman
const RandomHerobutton = document.getElementById('Button')
const RandomheroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

const getRandomSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.powerstats)
        const stats = getStatsHTML(json)
        const name = `<h2>${json.name}</h2>`
       RandomheroImageDiv.innerHTML = `${name}<img 
        src='${json.image.url}' height=300 width=300/>${stats}`
    })
    }

const getSearchSuperHero = (name) =>{
    // console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        // console.log(hero)
       RandomheroImageDiv.innerHTML =`<img 
        src='${hero.image.url}' height=300 width=300/>`
    })
}

const getStatsHTML = (character) =>{
   const stats = Object.keys(character.powerstats).map(stat =>{
    return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
   })
      console.log(stats.join(''))
      return stats.join('')
   }
 
const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
}

RandomHerobutton.onclick = () => getRandomSuperHero(randomHero())
searchButton.onclick = () => getSearchSuperHero(searchInput.value)


 