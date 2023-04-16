function solution(my_string) {
    var answer = my_string.replace(/[aeiou]/gi, '');
    return answer;
}