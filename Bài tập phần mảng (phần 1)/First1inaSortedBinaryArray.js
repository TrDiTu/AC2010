//find the first 1 in a sorted binary array
const arr = [0, 0, 0]
function first1(arr) {
    let count = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            return i
        }
    }
    if (count === -1){
        return -1
    }
}
console.log(first1(arr)) //3