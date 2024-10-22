//Given an array arr of positive integers. Reverse every sub-array group of size k.

const k = 3
const arr = [1,2,3,4,5]
function ReverseArrayinGroup(k, arr){
    let len = arr.length
    k = k % len
    let arr2 = arr.slice(0,k)
    let arr1 = arr.slice(k)
    arr2.reverse()
    arr1.reverse()
    return arr1.concat(arr2)
}
console.log(ReverseArrayinGroup(k, arr)) 
//=>[3,2,1,5,4]