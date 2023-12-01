// x 
function solution(X, Y) {
    var answer = '';
    let mapX = new Map();
    let mapY = new Map()
    
    for(const num of X) {
        mapX.set(num, (mapX.get(num) || 0) + 1)
    }
    for(const num of Y) {
        mapY.set(num, (mapY.get(num)|| 0) +1)
    }
    
    for(let i = 9; i >= 0 ; i--) {
        const num = String(i);
        const cnt = Math.min(mapX.get(num), mapY.get(num))
        answer += num.repeat(cnt)
    }

    return answer ? (Number(answer)? answer: '0'): '-1';
}