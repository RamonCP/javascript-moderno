const $root = document.querySelector('#root')

function getPeople(url){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const divElement = document.createElement('div')
            const ulElement = document.createElement('ul')

            for(let i = 0; i<data.results.length; i++){
                let liElement = document.createElement('li')
                liElement.innerHTML = `
                    <h3>${JSON.stringify(data.results[i].name)}</h3>
                `            
                ulElement.appendChild(liElement)
            }
            divElement.appendChild(ulElement)

            // const linkPrevious = document.createElement('button')
            // linkPrevious.innerHTML = "Página anterior"
            // linkPrevious.setAttribute('id','prev')

            // divElement.appendChild(linkPrevious)

            // const linkNext = document.createElement('button')
            // linkNext.innerHTML = 'Próxima página'
            // linkNext.setAttribute('id','next')

            // divElement.appendChild(linkNext)

            $root.innerHTML = ''
            $root.insertBefore(divElement, null)

            console.log(data.results)
        })
        
        // document.querySelector('#next').onclick = () => console.log("Ok")


    return "Olá"
}


export { getPeople }