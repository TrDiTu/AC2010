//Rotate an array by d counter clockwise
let arr = [1,2,3,4,5]
let d = 2
function RotateArrayByd(arr,d){
    
    let len = arr.length
    d = d % len
    let arr1 = arr.slice(d)
    let arr2 = arr.slice(0,d)
    return arr1.concat(arr2)
    
}
console.log(RotateArrayByd(arr,d)) 