export default class View{
    constructor(){
        this.app = document.querySelector('#app')
        this.form = this.createElement('form')
        this.input = this.createElement('input')
        this.button = this.createElement('button')
        this.h1 = this.createElement('h1')

        this.input.type = 'text'
        this.button.type = 'submit'

        this.input.placeholder = 'Add a user'
        this.button.textContent = 'Submit'
        this.h1.textContent = 'List User'
        
        this.form.append(this.input, this.button)
        this.app.append(this.h1,this.form)
    }

    createElement(tag){
        const element = document.createElement(tag)

        return element
    }

    handleListenerFormSubmit(handle){
        this.form.addEventListener('submit', event=>{
            event.preventDefault()
            console.log(event)

            handle(this.input.value)
        })
    }


}