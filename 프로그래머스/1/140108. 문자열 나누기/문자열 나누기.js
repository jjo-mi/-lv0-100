function solution(s) {
    var answer = 0;
    // let map = new Map();
    let firstStr = "";
    
    let sArr = s.split('');
    let cnt1= 0;
    let cnt2= 0;
    
    for(let str of s ){
        if(!firstStr) firstStr = str;
        
        str === firstStr ? cnt1++ : cnt2++;

        if(cnt1 === cnt2) {
            answer++;
            cnt1=0;
            cnt2=0;
            firstStr = "";
        }
        
    }
    if(firstStr) answer++;
    
    
    return answer;
    
}