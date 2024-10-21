let arr = [15, 2, 45, 4, 7, 8, 9, 10, 6, 5, 8, 12]
let ans = []
for (let i = 0; i < arr.length; i++){
    if (arr[i] == i+1){
        ans.push(arr[i])        
    }
}
console.log(ans.join(', ')) // print answer