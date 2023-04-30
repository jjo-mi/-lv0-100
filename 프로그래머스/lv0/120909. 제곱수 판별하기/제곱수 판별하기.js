function solution(n) {
    var answer = 2;
    while(answer <= n) {
        if(answer * answer === n) return 1;
        answer++
    }
    if(answer> n) return 2;
}