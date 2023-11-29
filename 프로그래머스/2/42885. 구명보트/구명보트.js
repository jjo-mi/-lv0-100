// 보트 무게제한 100kg
function solution(people, limit) {
    var answer = 0;
    let sortArr = people.sort((a,b)=> b-a);
    
    for(let i = 0, j = sortArr.length-1; i <= j; i+=1){
        if(limit >= sortArr[i] + sortArr[j]){
            j--     
        }
        answer+=1;       
    }
    return answer;
}