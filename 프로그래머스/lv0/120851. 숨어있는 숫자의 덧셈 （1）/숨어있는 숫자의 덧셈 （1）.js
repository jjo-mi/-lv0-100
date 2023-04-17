function solution(my_string) {
    let answer = my_string.match(/[0-9]/g).reduce((sum, curr) => sum + parseInt(curr),0);
    console.log(answer)
    return answer;
}