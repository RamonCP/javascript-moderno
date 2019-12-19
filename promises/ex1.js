const usernames = []

function users(){
    return new Promise((resolve,reject)=>{
        if ( usernames.length > 0 ) resolve("Has users")
        reject("not have users")
    })
}

let user = users()
user.then((resp)=>{
    console.log(resp)
}).catch((err)=>{
    console.log(err)
})