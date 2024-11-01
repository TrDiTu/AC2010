const arr = [1, 2, 3, 4, 6]
function countOddEven(arr) {
    let odd = 0
    let even = 0
    arr.forEach(x => {
        if (x % 2 === 0) {
            even++
        } else {
            odd++
        }
    });
    return [odd, even].join(' ')
}
console.log(countOddEven(arr))