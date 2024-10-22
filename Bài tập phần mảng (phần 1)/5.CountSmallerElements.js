//Given an array arr containing non-negative integers. Count and return an array ans where ans[i] denotes the number of smaller elements on right side of arr[i].
let arr = [3, 4, 9, 6, 1, 5, 7, 9, 2, 4, 5, ,10];
let ans = [];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
        count++;
        }
    }
    ans.push(count);
    }
console.log(ans); // [1, 1, 2, 1, 0]