const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

let [N,...paper] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim().split('\n');

N = +N; // 숫자형변환
paper = paper.map(s=>s.replace('\r','').split(' '));
let result = [0,0];

// console.log(paper);

//분할정복 함수

const devideConquer = (column, row, length) =>{
    let num = paper[column][row];
    if(check(column,row,length)){
        if(num === '0'){
            result[0]++;
        }else{
            result[1]++
        }
    }else{
        let newLength = length/2;
        for(let i = 0; i <2; i++){
            for(let j = 0; j< 2; j++){
                devideConquer(column + newLength*i, row + newLength*j, newLength);
            }
        }
    }
}



//체크 함수

const check = (column, row, length) =>{
    let firstNum = paper[column][row];
    for(let i = 0; i < length; i++){
        for(let j = 0; j<length; j++){
            if(firstNum !== paper[column+i][row+j]){
                return false;
            }
        }
    }
    return true;
}

devideConquer(0,0,N);

for(let i = 0; i < 2; i++){
    console.log(result[i]);
}