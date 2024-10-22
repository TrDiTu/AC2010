let names= ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]
function LongestName(names){
    let max = names[0]
    names.forEach((x)=>{
        if (x.length>max.length){
            max = x
        }
    })
    return max
}
console.log(LongestName(names)) //GeeksforGeeks