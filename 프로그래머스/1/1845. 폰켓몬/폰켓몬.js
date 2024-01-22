function solution(nums) {
    const result = new Map();
    const count = nums.length/2;
    let answer = 0;
    for(let i = 0; i < nums.length; i++){
        if(result.get(nums[i])){
            result.set(nums[i],result.get(nums[i])+1)
        }else{
            result.set(nums[i],1);
        }
    }
    console.log(count)
    
    for(let i = 0; i < result.size; i++){
        answer++;
    if(answer === count){
        break
    }
}    
    return answer;
}