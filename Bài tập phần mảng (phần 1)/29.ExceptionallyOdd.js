const N = 7
const arr = [5, 7, 2, 7, 5, 2, 5]
function ExceptionallyOdd(N,arr){
    let result = 0
        for (let i = 0; i<N; i++){
            result ^= arr[i]
        }
        return result      
}
console.log(ExceptionallyOdd(N,arr)) //3