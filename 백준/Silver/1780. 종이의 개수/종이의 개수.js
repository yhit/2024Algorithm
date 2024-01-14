const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

let [N,...paper] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim().split('\n');

 N = +N;



// console.log(n);
let result = new Array(3).fill(0); // 결과값을 담을 배열
paper = paper.map(s => s.replace('\r', '').split(' '));

// console.log(paper);




// 분할 정복 함수
const divideConquer = (column, row, length) => {
    if(checkBox(column, row, length)){
        const num = paper[column][row];
        if(num === '-1'){
            result[0]++;
        }else if(num === '0'){
            result[1]++;
        }else{
            result[2]++;
        }
        
    }else{
        let newLength = length/3;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                divideConquer(column+ newLength * i , row + newLength*j, newLength);
            }
        }
    }

}




// 체크 함수
const checkBox = (column, row, length) => {

    let firstnum = paper[column][row];

    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(paper[column+i][row+j] !== firstnum){
                return false;
            }
        }
    }
    
    return true;
}

divideConquer(0,0,N);

let String = `${result[0]+'\n'+result[1]+'\n'+result[2]}`
console.log(String);