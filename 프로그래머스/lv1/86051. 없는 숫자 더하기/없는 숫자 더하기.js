function solution(numbers) {

    let num = [1,2,3,4,5,6,7,8,9];
    var answer = num.filter(el => !numbers.includes(el));
    return answer.reduce((arr,cur) => arr+cur,0);
}