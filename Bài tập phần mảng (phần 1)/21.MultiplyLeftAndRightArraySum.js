let arr = [1,2,3,5]
function MultiplyLeftAndRightArraySum(arr){
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i<Math.ceil(arr.length/2); i++){
        sum1 += arr[i]
    }
    for (let i = Math.ceil(arr.length/2); i< arr.length; i++){
        sum2 += arr[i]
    }
    return sum1*sum2
}
console.log(MultiplyLeftAndRightArraySum(arr))