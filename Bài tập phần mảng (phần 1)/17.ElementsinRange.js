let n = 7
let A = 2 
let B = 5
let arr = [1, 4, 5, 2, 7, 8, 3]
let newarr = new Set(arr)
function ElementsinRange(n,A,B,arr){
    let count = 0
    arr.forEach((x)=>{
        if (x>=A && x<=B){
            count++
        }
    })
    if (count === B-A+1){
        return "True"
    } else {
        return "False"
    }

}
console.log(ElementsinRange(n,A,B,newarr)) //True