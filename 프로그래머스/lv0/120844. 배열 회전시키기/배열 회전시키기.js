function solution(numbers, direction) {
    var answer = [];
    if(direction === "right") {
       numbers.unshift(numbers.slice(-1)[0]);
        numbers.pop();
    } else{
        numbers.push(numbers.slice(0)[0]);
        numbers.shift();
    }
    return numbers;
}