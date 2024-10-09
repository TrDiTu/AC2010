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
//Tạo IO interface trên console
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//object 1
const circle = {
    radius: 0,
    prototype: 3.14,
    get diameter(){
        return this.radius*2
    },
    get dt(){
        return this.prototype*this.radius**2
    },
    get cv(){
        return this.diameter*this.prototype
    }
}
//set NaN nếu r<0
Object.defineProperty(circle, "setNaN", {
    get : function(){
        this.radius = NaN
        this.diameter = NaN
    }
})
//input cho circle
rl.question('nhập r ', (ans) => {
    if (ans<0){
        circle.setNaN
    }
    else{
        circle.radius = ans
    }
//output
console.log(`r = ${circle.radius}, d = ${circle.diameter}`)
console.log(`s = ${circle.dt} c = ${circle.cv}`)
//exit process
rl.close()
}
)
rl.on('close',() => {
    process.exit(0)
}
)
