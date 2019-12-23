export default class Model{
    constructor(){
        this.listUser = []
    }

    addToList(user){
        const username = {
            id: 1,
            username: user
        }
        
        this.listUser.push(username)
    }
}
