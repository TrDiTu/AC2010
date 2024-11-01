//given a string s consisting of only '0's and '1's
const s = '00000000'
function lastIndexofOne(s) {
    for (let i = s.length - 1; i>=0; i--){
        if (s[i] === '1'){
            return i
            break
        }
    }
    return -1
}
console.log(lastIndexofOne(s))