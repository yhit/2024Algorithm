function solution(phone_book) {
    let tmp = phone_book.sort();    
    
    for(let i = 0; i < tmp.length-1; i++){
       if(tmp[i] === tmp[i+1].slice(0,tmp[i].length)){
           return false
       }
    }
    return true;
}