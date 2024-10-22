const n = 5
arr = [0,1,1,0,0,1,1,1,1,0,0,1,1]
function BinaryArraySorting(n,arr){
    ans = []
    for (let i = 0; i<n; i++){
        ans.push(arr[i])
    }
    ans.sort((a,b) => a-b)
    return ans
}
console.log(BinaryArraySorting(n, arr).join(' ')) //1 2 3 4 5