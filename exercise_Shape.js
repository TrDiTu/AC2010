class Shape {
    static count = 0
    constructor(){
        Shape.count++
    }
    static get count(){
        return Shape.count
    }
    show(){
        return `#Shape: ${Shape.count}`
    }
}
class Square extends Shape {
    #a
    constructor(a){
        super();
        this.#a = a 
    }
    get area(){
        return this.#a**2
    }
    show(){
        return super.show() + ` square with a = ${this.#a}`
    }
}
class Circle extends Shape{
    #r
    constructor(r){
        super();
        this.#r = r
    }
    get area(){
        return this.#r**2*Math.PI
    }
    show(){
        return super.show() + ` circle with r = ${this.#r}`
    }
}
class Rectangle extends Shape{
    #a;#b
    constructor(a,b){
        super()
        this.#a = a 
        this.#b = b
    }
    get area(){
        return this.#a*this.#b
    }
    show(){
        return super.show() + ` rectangle with a = ${this.#a}, b = ${this.#b}`
    }
}
const circle = new Circle(4)
const square = new Square(6)
const rectangle = new Rectangle(5,8)
a = [new Circle(4), new Square(6), new Rectangle(5,8)]
a.forEach ((x) =>{
    console.log(x.show())
})
let area = 0 
a.forEach ((x) =>{
    area += x.area
})

console.log(area)