function solution(k, score) {
    var answer = [];
    let arr= [];
    
    for(let i = 0; i < score.length; i++) {
        if(arr.length === k) {
           if(score[i] > Math.min(...arr)) {
             arr.sort((a,b) => b-a).pop();
             arr.push(score[i]);
        } 
        answer.push(Math.min(...arr));
        }else{
            arr.push(score[i]);
            answer.push(Math.min(...arr));
        }
    }

    
    return answer;
}