const arr = [7, -2, 3, 4, 9, -1]
function TwoGreaterElement(arr){
    let ans = []
    arr.sort((a,b) => a-b)
    for (let i = 0; i<arr.length-2; i++){
        ans.push(arr[i])
    }
    return ans
}
console.log(TwoGreaterElement(arr)) //1 2 5