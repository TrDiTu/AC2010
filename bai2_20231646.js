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
//Tạo input interface
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})