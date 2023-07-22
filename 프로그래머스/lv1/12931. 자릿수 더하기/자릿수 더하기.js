function solution(n)
{
    var answer = 0;
    let num = n;
    while(num >= 1){
        let rest = num % 10;
        num = parseInt(num / 10);
        answer += rest;
    }
        return answer;
}