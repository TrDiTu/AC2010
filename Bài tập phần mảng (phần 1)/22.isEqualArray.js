let arr1 = [2,2,2]
let arr2 = [2,2,2]
function isEqualArray(arr1,arr2){
    let sortedarr1 = arr1.sort((a,b)=>a-b)
    let sortedarr2 = arr2.sort((a,b)=>a-b)
    if (sortedarr1.length !== sortedarr2.length){
        return false
    }
    for (let i = 0; i<sortedarr1.length; i++){
        if (sortedarr1[i] !== sortedarr2[i]){
            return false
        }
    }
    return true
}
console.log(isEqualArray(arr1,arr2)) //true