//Rotate an array by     clockwise
let arr = [1,2,3,4,5]
function RotateArrayBy1(arr){
    let temp = arr[arr.length-1]
    for (let i = arr.length-1; i>0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = temp
    return arr
}
console.log(RotateArrayBy1(arr)) //[2,3,4,5,1]