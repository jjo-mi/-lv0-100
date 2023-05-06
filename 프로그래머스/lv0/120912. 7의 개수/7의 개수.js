function solution(array) {
    var answer = array.join('').split('').filter(el => el == 7).length;
    return answer;
}