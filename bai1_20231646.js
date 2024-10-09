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
const c1 = {
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
Object.defineProperty(c1, "setNaN", {
    get : function(){
        this.radius = NaN
        this.diameter = NaN
    }
})
//input
rl.question('nhập r ', (ans) => {
    if (ans<0){
        c1.setNaN
    }
    else{
        c1.radius = ans
    }
//output
console.log(`r = ${c1.radius}, d = ${c1.diameter}`)
console.log(`s = ${c1.dt} c = ${c1.cv}`)
//exit process
rl.close()
}
)
rl.on('close',() => {
    process.exit(0)
}
)
