//Bài 2
/*
Viết hàm khởi tạo đối tương ptb2 có:
- thuộc tính bán tính a,b,c
- có get delta, get số nghiệm
- có get nghiệm: trả về undefined nếu vô nghiệm, trả về 1 nếu nghiệm kép, trả về {x1:...,x2:...} nếu có 2 nghiệm phân biệt
Yêu cầu khởi tạo a = 0 thì set a = NaN
Viết chuong trình mẫu sinh ra 2 ptb2 và kiểm thử
*/
//Bắt đầu
//Tạo Object
function ptb2(a,b,c){
    this.a = a
    if (a==0){
        this.a = NaN
    }
    this.b = b
    this.c = c
}
    ptb2.prototype = {

    get delta(){
    if (this.a == NaN){
        return 0
    }    
    else {
        return ((this.b**2)-4*(this.a*this.c))
    }
    },
    get songhiem(){
        if (this.delta<0){
            return 0
        }
        else if (this.delta>0){
            return 2
        }
        else return 1
    },
    get nghiem(){
        if (this.delta<0){
            return undefined
        }
        else if (this.delta > 0){
            return (`x1 = ${-this.b/this.a}, x2 = ${this.c/this.a}`)
        }
        else return 1
    }
 }
//Tạo ptb2
var pt1 = new ptb2(1,-4,2)
var pt2 = new ptb2(0,3,2)
//Trả kết quả của pt1
console.log("phuong trinh 1:")
console.log(`delta = ${pt1.delta}`)
console.log(`so nghiem = ${pt1.songhiem}`)
console.log(`nghiem = ${pt1.nghiem}`)


//Trả kết quả của pt2
console.log("phuong trinh 2:")
console.log(`delta = ${pt2.delta}`)
console.log(`so nghiem = ${pt2.songhiem}`)
console.log(`nghiem = ${pt2.nghiem}`)