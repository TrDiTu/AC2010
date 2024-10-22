const arr = [111,222,333,444,555,666]
function isPalindromic(arr){
    let count = 0
    arr.forEach((x)=>{
        if (x.toString() === x.toString().split("").reverse().join("")){
            count++
        }
    }
    )
    return (count===arr.length)
}
console.log(isPalindromic(arr))