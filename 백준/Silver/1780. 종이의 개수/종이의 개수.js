const fs = require('fs');
let [N, ...paper] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

N = N * 1;
paper = paper.map(line => line.split(' '));

// 계수 변수 선언
let minusOne = 0;
let zero = 0;
let one = 0;

// 함수 실행 및 결과갑 출력
divideConquer(0, 0, N);
const answer = minusOne + '\n' + zero + '\n' + one;
console.log(answer);

// 분할 정복 함수
function divideConquer(column, row, length) {
  if (checkBox(column, row, length)) {
    const initialValue = paper[column][row];
    if (initialValue === '-1') {
      minusOne++;
    } else if (initialValue === '0') {
      zero++;
    } else {
      one++;
    }
  } else {
    const dividedLength = length / 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        divideConquer(column + dividedLength * i, row + dividedLength * j, dividedLength);
      }
    }
  }
}

// 분면 확인 함수
function checkBox(column, row, length) {
  const initialValue = paper[column][row];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (paper[column + i][row + j] !== initialValue) {
        return false;
      }
    }
  }

  return true;
}