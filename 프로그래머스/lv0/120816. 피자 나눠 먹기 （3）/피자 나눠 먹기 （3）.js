function solution(slice, n) {
    var answer = 0;
    if(slice >= n) return 1;
    
    for(let i = 1; i < n; i++) {
        if(i*slice >= n) {
           return i;
        }
    
    }
        
    return answer;
}