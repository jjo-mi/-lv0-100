function solution(n) {
    var answer = 1;
    while(factorial(answer) < n) {
        if(n >= 3628800){
            return 10;
        } 
        answer++;
    }
    
    return factorial(answer) > n ? (answer -1) : answer;
}

//팩토리얼 함수
function factorial(num) {
  if (num === 0 || num === 1)
    return 1;

  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
console.log('2',num)
  return num;
}