/*
457 -> 228 -> 114 -> 171 -> 199 -> 213 -> 206 -> 202 -> 200

계속 2로 나눔 그러다가 11보다 커지는 순간이 오면 함수 시작
이때 저장된 배열 [228,114]
(228 + (228+114)/2)/ 2

199 -> 11이야. N보다 크거나 같으면 앞에껄 유지
[228. 199]
213-> 10이야. N보다 작으면 뒤에것을 유지하고 앞의 값을 절반 값으로
[213,199]

tmp[전전,전]

변수를 저장하고 11보다 크면 ((이전 숫자와 현재숫자의 절반) + (이전숫자)) / 2 를하고
11보다 더 작으면 

온라인 공지사항 장비서약서 올리면된다.....
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

let [N,...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim().split('\n');

N = N.split(' ')[1]; // 원하는 랜선 갯수
input = input.map(r=> +r.replace('\r','')).sort((a,b) => a-b);

let max = input[input.length-1];
let min = 1;

while(min<= max){
    let mid = Math.floor((max+min)/2);
    let count = 0;
    for(let i = 0; i < input.length; i++){
        count += Math.floor(input[i]/mid);
    }
    if (count >= N) {
        min = mid + 1;
    } else {
        max = mid - 1;
    }
}
console.log(max);


