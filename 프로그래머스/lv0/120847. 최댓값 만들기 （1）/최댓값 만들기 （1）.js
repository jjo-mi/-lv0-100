function solution(numbers) {
    let arr = numbers.sort((a, b) => a - b);
    return arr.pop() * arr.pop();
}