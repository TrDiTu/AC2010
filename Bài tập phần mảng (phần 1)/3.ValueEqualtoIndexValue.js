const arr = [1, 2, 3, 4, 5]
function indexEqualValue(arr){
let ans = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i+1) {
        ans.push(i+1)
    }
}
return ans
}
console.log(indexEqualValue(arr)) //[1, 2, 3, 4, 5]