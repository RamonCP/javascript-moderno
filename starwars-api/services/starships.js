function getStarships(url){
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data.results))
}
export { getStarships }