class Rectangle {
    constructor(height, width){
        this.height = height
        this.width = width
    }

    get area(){
        this.area()
    }

    area(){
        return this.width * this.height
    }
}

const rect = new Rectangle(10,10)

console.log(rect.area())