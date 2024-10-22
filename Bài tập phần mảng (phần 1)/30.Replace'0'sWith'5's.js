const N = 3
const arr = [2000, 4000, 3040]
function convertFive(n){
    let len = n.length
    for (let i = 0; i<len; i++){
        let s = n[i].toString()
        s = s.replace(/0/g, '5')
        n[i] = s
    }
    return n
}
console.log(convertFive(arr).join(' ')) //1554