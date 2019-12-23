
export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.view.handleListenerFormSubmit(this.addToList)
    }

    addToList(user){
        this.model.addToList(user)
    }
}