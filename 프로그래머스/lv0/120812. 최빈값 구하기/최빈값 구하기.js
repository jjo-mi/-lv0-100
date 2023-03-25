function solution(array) {
    var answer = [];

    let newArr = array.sort((a, b) => a-b);
    let cnt = new Map();
   
    //newArr 배열을 순차적으로 돌면서 값 꺼내기 i = value
    for(let i of newArr) {
        // 만약 cnt에 i번째 값이 있으면 cnt i 값에 1더해주고
        // cnt에 i번째 값이 없으면 cnt 새로운 값을 넣어줘  
        if(cnt.has(i)) {
            cnt.set(i, cnt.get(i)+1);
        } else {cnt.set(i, 1)}
    
    }
    // cnt의 value 중 제일 큰값만 뽑기
    let max = Math.max(...cnt.values());
   
//     max로 뽑은 최빈값의 key 값 찾으며, 최빈값이 중복되는지 count에 저장
    let count = 0;
    let result = 0;
    for (let [key, value] of cnt) {
        console.log([key, value]);
        if(value === max) {
            count++;
            result = key;
        }
    }
    
//     만약 최빈값이 중복되면 -1, 아니면 최빈값의 키값 리턴
    if(count > 1) {
        return -1;
    } else {
        return result;
    }
}