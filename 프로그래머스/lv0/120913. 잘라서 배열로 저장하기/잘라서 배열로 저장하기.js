function solution(my_str, n) {
    var answer = [];
    strArr = my_str.split('')
    while(strArr.length > 0) {
        answer.push(strArr.splice(0,n).join(''));
    }
    return answer;
}