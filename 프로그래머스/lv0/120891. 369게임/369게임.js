function solution(order) {
    var answer = String(order).match(/[369]/g);
    return answer == null? 0 : answer.length;
}