//Bài 1
/*
Viết hàm khởi tạo đối tượng hình tròn có:
- thuộc tính bán kính: r, r<0 -> NaN, nếu không có r thì set = 0
- có get, set r, nếu r < 0 thì r = NaN
- có get, set duongkinh
- có get dientich, get chuvi
- có PI cho Circle.prototype
*/
//Bắt đầu
//object Circle
function Circle(radius) {
    if (radius < 0){
        this.r = NaN
        }    else this.r = radius
    
}
    Circle.prototype = { 
    get r(){
        return this._r
    },
    set r(r){
        this._r = r 
        if (this._r < 0) {
            this._r = NaN
        }
    },
    get duongkinh(){
        return this.r*2
    },
    get dt(){
        return Math.PI*this.r**2
    },
    get cv(){
        return this.duongkinh*Math.PI
    }
}
Circle.prototype.PI = Math.PI
//Tạo 2 object c1 và c2
var c1 = new Circle(6)
var c2 = new Circle(-2)
//Trả kết quả của c1 
console.log("c1:")
console.log(c1.r)
console.log(c1.duongkinh)
console.log(c1.dt)
console.log(c1.cv)
//Trả kết quả của c2
console.log("c2:")
console.log(c2.r)
console.log(c2.duongkinh)
console.log(c2.dt)
console.log(c2.cv)