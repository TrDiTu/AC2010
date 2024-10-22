const arr = [1, 2, 3, 4, 5]
function alternateInAnArray(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            ans.push(arr[i])
        }
    }
    return ans
}
console.log(alternateInAnArray(arr.join(' '))) //[1, 3, 5]