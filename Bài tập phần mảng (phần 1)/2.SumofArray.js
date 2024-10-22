//You are given an integer array arr[]. The task is to find the sum of it.
const arr = [1, 2, 3, 4, 5]

function sum(arr) {
        let sum = 0
        arr.forEach((x) =>{
            sum += x
        })
        return sum
    }
console.log(sum(arr)) //15
