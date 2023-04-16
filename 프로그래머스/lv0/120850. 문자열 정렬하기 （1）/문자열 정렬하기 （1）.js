function solution(my_string) {
    var number = my_string.replace(/[^0-9]/g,'');
    let answer = number.split('').map(el => parseInt(el)).sort((a,b) => a - b);
    return answer;
}