function solution(babbling) {
    var answer = 0;
    const regex = /aya|ye|woo|ma/g;
    
    for(let i = 0; i < babbling.length; i++){
        let check = babbling[i].replace(regex, '')
        if(check == ''){
            answer += 1;
        }
    }
  
    
    return answer;
}