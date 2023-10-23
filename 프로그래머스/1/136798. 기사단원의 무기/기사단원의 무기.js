function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1; i <= number; i++) {
        let share = 0;
        for(let j = 1; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                i/j === j? share += 1 : share +=2;
            }
        }
        if(share > limit) {
            share = power;
        }
        answer+= share;
    // console.log(share)
    
    }

    return answer;
}