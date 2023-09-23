function solution(array, commands) {
    var answer = [];
    
    commands.map(arr => {
        let newArr = array.slice((arr[0]-1), arr[1]);
        let sortArr = newArr.sort((a,b) => a-b);
        answer.push(sortArr[arr[2]-1])
    })

    return answer;
}