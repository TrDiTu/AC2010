let arr = [1,2,3,4,5,6,7,1,4,2,5,3]
function thirdLargest(arr){
if (arr.length<2){
    return -1
}
else {
    let newarr = [...new Set(arr)]
    newarr.sort((a,b) => b-a)
    return newarr[2]
}
}
console.log(thirdLargest(arr)) //5