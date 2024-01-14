function solution(friends, gifts) {
  let N = friends.length
  

    let exchange = new Array(N);
    let giftpoint = new Array(N).fill(0); // 선물 지수 배열
    let result = new Array(N).fill(0); // 결과값을 담을 배열 
    for(let i = 0; i < N; i++){
        exchange[i] = new Array(N).fill(0); // 주고 받은 선물 배열
    }
  
    for(let i = 0; i < gifts.length; i++){
        let f1 = gifts[i].split(' ')[0];
        let f2 = gifts[i].split(' ')[1];
        let x = undefined;
        let y = undefined;
        for(let j = 0; j < N; j++){
            if(friends[j] === f1){
                x = j; // 준사람
            }else if(friends[j] === f2){
                y = j // 받은 사람
            }
        }
        exchange[x][y]++;
        giftpoint[x]++;
        giftpoint[y]--;
        
    }
    // 주고받은 선물 and 선물 지수 표시 완료
    
    for(let i = 0; i < N ; i++){
        for(let j = 0; j < N; j++){
            if(i ===j){
                continue; // 자기 자신임
            }
            
            if(exchange[i][j] !== exchange[j][i]){ // 주고받은게 다르면
                if(exchange[i][j] > exchange[j][i]){
                    result[i]++; // 받아야하는 선물 +~
                }
            }else{ // 주고 받은 갯수가 같으면 선물지수 비교해야함
                if(giftpoint[i] > giftpoint[j]){
                    result[i]++;
                }
            }
            
            
        }
    }
    
    
    // console.log(exchange);
    // console.log(giftpoint);
    // console.log(result);
    
    result.sort((a,b) =>( b-a));
    // console.log(result[0]);
    return result[0];
    
   
}