function solution(numbers) {

    let sum = numbers.reduce((sum, currValue) => {
        return sum + currValue;
    }, 0);

    var answer = sum / numbers.length;
    return answer;
}