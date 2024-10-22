const arr = [1,2,3,4,5]
function isPalindrome(arr){
    let len = arr.length
    for (let i = 0; i<Math.floor(len/2); i++){
        if (arr[i] !== arr[len-1-i]){
            return false
        }
    }
    return true
}
console.log(isPalindrome(arr)) //false