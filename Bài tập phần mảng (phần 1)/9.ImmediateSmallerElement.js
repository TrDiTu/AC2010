const n = 5 
arr = [4, 2, 1, 5, 3]
function ImmediateSmallerElement(n, arr){
    let ans = []
    for (let i = 0; i<arr.length; i++){
        if (arr[i]>arr[i+1]){
            ans.push(arr[i+1])
        }
        else{
            ans.push(-1)
        }
    }
    return ans.join(' ')
}
console.log(ImmediateSmallerElement(n, arr)) //2 1 -1 3 -1