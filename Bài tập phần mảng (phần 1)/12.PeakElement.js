//Given an 0-indexed array of integers arr[] of size n, find its peak element and return it's index. An element is considered to be peak if it's value is greater than or equal to the values of its adjacent elements (if they exist).
const n = 5
arr = [1,2,3]
function PeakElement(n, arr){
    let ans = 0
    for (let i = 0; i<arr.length; i++){
    if (i===0 || i===arr.length-1){
        if (arr[i]>arr[i-1] || arr[i]>arr[i+1]){
            ans = i
            }
        } 
    else {
        if (arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            ans = i
            }
        }
    }
    return ans
}
console.log(PeakElement(n, arr)) 