function solution(rsp) {
    let answer = [];
    rsp.split("").forEach(el => {
        if(el == 2){
            answer.push('0')
        } else if(el == 0) {
            answer.push('5')
        } else{answer.push('2')}
    })
        return answer.join('');    
}