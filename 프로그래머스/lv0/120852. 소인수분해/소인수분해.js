function solution(n) {
    var answer = [];
    let divisor = 2;
    console.log(answer)
    while(n >= 2) {
        if(n % divisor === 0) {
            answer.push(divisor);
            n = n /divisor;
        } else divisor++;
    }
    return [...new Set(answer)];
}