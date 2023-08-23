function solution(price, money, count) {
    var answer = money
    for(let i = 0; i <= count; i++) {
        answer -= (price * i);
    }
    return answer > 0 ? 0 : Math.abs(answer);
}