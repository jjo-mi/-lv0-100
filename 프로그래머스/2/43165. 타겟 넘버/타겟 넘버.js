// target이 되는 방법의 수를 리턴해라
function solution(numbers, target) {
    let answer = 0;
    function dfs(inx, sum) {
        // console.log(inx, sum, answer)
        if(inx === numbers.length){
            if(sum === target){
                answer++;
            }
            return;
        }
        dfs(inx+1, sum + numbers[inx]);
        dfs(inx+1, sum - numbers[inx]);
    }

    dfs(0,0);
    return answer;
}