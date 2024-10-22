const arr = [1, 5, 3, 2]
function BalancedArray(arr){
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i<arr.length/2; i++){
        sum1 += arr[i]
    }
    for (let i = arr.length/2; i< arr.length; i++){
        sum2 += arr[i]
    }
    return Math.abs(sum1-sum2)
}