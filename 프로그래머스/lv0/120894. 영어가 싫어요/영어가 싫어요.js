function solution(numbers) {
    var answer = 0;
    const numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    numStr.forEach((numStr, idx) => {
        numbers = numbers.replaceAll(numStr, idx);
    })

    return parseInt(numbers);
}