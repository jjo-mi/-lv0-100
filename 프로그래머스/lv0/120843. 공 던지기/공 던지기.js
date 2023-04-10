function solution(numbers, k) {
    
    let 이동수 = (2 * (k-1)) % numbers.length;
    var answer = numbers[이동수];
    
    
    return answer;
}