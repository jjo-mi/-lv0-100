function solution(n, m, section) {
    var answer = 0;
    let wallArr = new Array(n).fill(true)
    section.forEach(el => wallArr[el-1] = false)
    console.log(wallArr);
    
    for(let i = 0; i < wallArr.length; i++) {
        if(!wallArr[i]) {
            answer+= 1;
            i += m-1;
        }
    }
    return answer;
}