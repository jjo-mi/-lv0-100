function solution(s) {
    var answer = [];
    let sArr = s.split('},').map(el => el.replace(/[{}]/g, ''));
    let sArrSort = sArr.sort((a,b) => a.length - b.length);
    sArr = sArr.map((str)=> str.split(',').map(Number));
    
    if(sArr.length === 1) {
        return [Number(sArr[0])];
    }else {
        sArr.forEach((nums) => {
            nums.map(num => {
                if (!answer.includes(num)) {
                    answer.push(num);
                }
            
            })
        })
    }
    
    return answer;
}