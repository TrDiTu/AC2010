arr = [5,3,1,6,9]
function IshaanLovesChocolates(arr){
    let start = 0
    let end = arr.length-1
    while (start<end){
        if (arr[start] > arr[end]){
            start++
        }
        else{
            end--
        }
    }
    return arr[start]
}
console.log(IshaanLovesChocolates(arr))