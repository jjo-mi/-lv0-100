function solution(x) {
    let sum = 0;
    let num = String(x).split('').map(el => sum += (+el));
    return x % sum == 0 ? true : false ;
}