function solution(num) {

    let cnt = 0
    let a = num;
    while(a !== 1) {
        if(a % 2 === 0) {
            a = a / 2;
        }else(a = (a*3) +1);
        cnt += 1;
        if(cnt === 500) return -1;
    }
    return cnt;
}