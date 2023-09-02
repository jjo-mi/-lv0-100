function solution(s) {
    var answer = "";
    let cnt = 0;
    let arr = [...s.split("")];
    console.log(arr)
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === " "){
            cnt = 0;
            answer += " ";
        }else{cnt % 2 === 0 ? answer += arr[i].toUpperCase() : answer += arr[i].toLowerCase();
        cnt++;
        }
        console.log(cnt)
    }
    return answer;
}