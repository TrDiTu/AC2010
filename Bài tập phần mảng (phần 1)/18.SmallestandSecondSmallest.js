arr = [2,2,2]
setarr = new Set(arr)
function SmallestandSecondSmallest(arr){
    let min = Math.min(...arr)
    let min2 = Math.max(...arr)
    newarr.forEach((x)=>{
        if (x<min2 && x>min){
            min2 = x
        }
    })
    if (min2 === min){
        return -1
    } else{
    return [min, min2]
    }
}
console.log(SmallestandSecondSmallest(setarr))