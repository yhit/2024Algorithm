const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const [N,...numbers] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim().split('\n');

let number = numbers.map(v=>v.trim())

// console.log(number)


const mergeSort = (arr) => {
if(arr.length === 1){
    return arr;
}

let mid = Math.floor(arr.length/2);
let first = mergeSort(arr.slice(0,mid));
let last = mergeSort(arr.slice(mid));

let i = 0; let j = 0 ;
const sorted = [];

while(i<first.length && j < last.length){
    if(first[i] < last[j]){
        sorted.push(first[i]);
        i++;
    }else{
        sorted.push(last[j]);
        j++;
    }
}

if(i < first.length){
    sorted.push(...first.slice(i));
}
if(j < last.length){
    sorted.push(...last.slice(j)); 
}

return sorted;

}

const result = mergeSort(number.map(v=>BigInt(v)));
let MAX = 0;
let currenCount = 0;
let answer = 2**62;;
let previous = '';

// console.log(result);

for(let  i = 0; i < result.length; i++){
    if(result[i] != previous){
        previous = result[i];
        currenCount = 0;
    }
    currenCount++;
    if(currenCount > MAX || currenCount === MAX && answer > result[i]){
        MAX = currenCount;
        answer = result[i];
    }
}
console.log(String(answer));