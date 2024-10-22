//given two array: a1[0..n-1] and a2[0..m-1], where both array may contain duplicate elements. determine wherther array a2 is a subset of array a1
const a1 = [11, 1, 13, 21, 3, 7]
const a2 = [11, 3, 7, 1]
function SubsetOrNot(a1, a2){
    let i = 0
    let j = 0
    a1.sort((a,b) => a-b)
    a2.sort((a,b) => a-b)
    while (i<a1.length && j<a2.length){
        if (a1[i] === a2[j]){
            i++
            j++
        }
        else{
            i++
        }
    }
    return j === a2.length ? "Yes" : "No"
}
console.log(SubsetOrNot(a1, a2)) //Yes