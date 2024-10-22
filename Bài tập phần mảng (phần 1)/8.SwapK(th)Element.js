const k = 3
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function swapElement(k,arr){
    let temp = arr[k-1]
    arr[k-1] = arr[arr.length-k]
    arr[arr.length-k] = temp
    return arr
}
console.log(swapElement(k,arr)) //[1, 2, 9, 4, 5, 6, 7, 8, 3, 10]