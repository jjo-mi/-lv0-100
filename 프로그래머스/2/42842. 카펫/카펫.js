function solution(brown, yellow) {
    var answer = [];
    let sum = brown+yellow;
    for(let i = 3; i <= sum; i++) {
        let width = Math.floor(sum/i);
        let heigh = i;
        
        if(width < heigh) continue;
        
        if((width-2) * (heigh-2) === yellow){
            return [width, heigh]
        }
        
    }
    return answer;
}