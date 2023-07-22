function solution(x, n) {
    var answer = [];
    let a = 0;
    while(answer.length < n){
        a === 0 ? answer.push(a = x) : answer.push(a = a + x);
    }

    return answer;
}