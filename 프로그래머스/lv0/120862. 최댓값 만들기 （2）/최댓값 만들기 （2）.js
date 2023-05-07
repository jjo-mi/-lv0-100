function solution(numbers) {
    var answer = 0;
    let s = numbers.sort((a,b) => a-b);
    for(let i = 0; i< s.length-1; i++) {
        let a = s[i] * s[i+1];
        
        if(answer == 0){
            answer = a;
        }else if(answer < a) {
            answer = a;
        }
    }
    
    return answer;
}