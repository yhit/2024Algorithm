function solution(clothes) {
    let box = new Map();
    let answer = 1;

    for(let i =0 ; i < clothes.length; i++){
        if(box.get(clothes[i][1])){
            box.set(clothes[i][1],box.get(clothes[i][1])+1)
        }else{
            box.set(clothes[i][1],1);
        }
    }

    for(let value of box.values()){
        
        answer *= (value + 1);
        console.log("값"+value)
        console.log(answer)
    }

    return answer - 1;
}