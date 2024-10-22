//given an array arr of non-negative integers, return the max product of two numbers possible
const arr = [1, 2, 3, 4, 5]
function maxProd(arr) {
    let max1 = 0
    let max2 = 0
    arr.forEach((x) =>{
        if (x > max1) {
            max2 = max1
            max1 = x
        } else if (x > max2) {
            max2 = x
        }
    })
    return max1 * max2
}
console.log(maxProd(arr)) //20