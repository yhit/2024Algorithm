const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let str = input[0].trim();
let explode_str = input[1].trim();
let len = explode_str.length;
let stack = [];
for (let i = 0; i < str.length; i++) {
  let flag = false;
  if (str[i] === explode_str[len - 1]) { // 끝 글자와 같다면.
    for (let j = 0; j < len - 1; j++) {
      if (stack[stack.length - (j + 1)] === explode_str[len - (j + 2)]) {
        // stack[(스택의길이-1 ) - j] === explode_str[(문자열길이-2) - j]
        continue;
      }
      flag = true;  // 스택에 담긴것과 하나라도 다르면 flag true 후 break
      break;
    }
    if (flag) { // 스택에 담긴 것과 다르면
      stack.push(str[i]);
      // 문자열을 바로 배열로 사용할 수 있네..?
    } else {// stack과 문자열이 일치한다면 문자열 길이만큼 지운다.
      for (let k = 0; k < len - 1; k++) {
        stack.pop();
      }
    }
  } else { // 문자열과 일치하지 않으면 stack에 추가한다.
    stack.push(str[i]);
  }
}
let result = stack.join("");
if (result === "") {
  console.log("FRULA");
} else {
  console.log(result);
}