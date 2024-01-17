const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const [n,input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim().split('\n');

  const N = Number(n);
  const A = input.split(" ").map(Number);
  const stack = [];
  
  for (let i = 0; i < N; i++) {
    while (stack.length && Number(A[i]) > Number(A[stack[stack.length - 1]])) {
      A[stack.pop()] = A[i];
    }
    stack.push(i);
  }
  
  while (stack.length) {
    A[stack.pop()] = -1;
  }
  
  console.log(A.join(' ').trim());