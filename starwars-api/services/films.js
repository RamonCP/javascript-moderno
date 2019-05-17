const $root = document.querySelector("#root")

function getFilms(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const ulElement = document.createElement('ul')

        for(let i = 0; i<data.count; i++){
            let liElement = document.createElement('li')
            liElement.innerHTML = `
                <h3>${JSON.stringify(data.results[i].title)}</h3>
                <p>${JSON.stringify(data.results[i].opening_crawl)}</p>
            `            
            ulElement.appendChild(liElement)
        }
        $root.innerHTML = ''
        $root.insertBefore(ulElement, null)
    
    })
}

export { getFilms }