function solution(n)
{
    var answer = [];
    let num = n;
    while(num >= 1){
        let rest = num % 10;
        num = parseInt(num / 10);
        answer.push(rest);
    }
        return answer.reduce((a,b) => a+b, 0)
}