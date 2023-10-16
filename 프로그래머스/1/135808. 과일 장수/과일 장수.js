function solution(k, m, score) {
    var answer = 0;
    if(score.length < m) return 0;

    let newArr = score.sort((a,b) => b-a);
    
    for(let i = m-1; i < newArr.length; i+=m) {
    // console.log(parseInt(score.length/m)*m)

        answer += newArr[i] * m;

    }
    
//     while(newArr.length >= m) {
//         console.log("1", newArr)
        
//         answer += Math.min(...newArr.slice(0,m)) * m;
//         newArr.splice(0,m);
//         console.log("2", newArr)
        
//     }

    return answer;
}