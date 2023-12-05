// 체육복은 학생의 앞과 뒤에만 체육복 빌려줄 수 있음
// n = 전체 학생, lost 도난당한 학생, reserve 여벌의 체육복 소지자
// reserve 도난당한 학생이 있을 수 있음
// 1벌 이상의 체육복을 가지고 있는 학생 수 리턴
function solution(n, lost, reserve) {
    let students = Array(n).fill(1);
    // let validLost = lost.filter(num => !reserve.includes(num));
    // let validReserve = reserve.filter(num => !lost.includes(num))
    
    
    for(let i = 0; i < lost.length; i++) {
        students[lost[i]-1] --;
    }
    
    for(let i =0; i < reserve.length; i++){
        students[reserve[i]-1]++;
    }
    
    console.log(`1`, students)
    for(let i = 0; i < n; i++) {
        if(i > 0 && students[i]===0 && students[i-1] === 2){
            students[i]++;
            students[i - 1]--;
    console.log(`참일때`, students)
            
        }else if(i < n-1 && students[i]===0 &&students[i+1] ===2){
            students[i]++;
            students[i + 1]--;
    console.log(`참일때`, students)
            
        }
    }
      console.log(`2`, students)
    let answer = students.filter(num => num > 0).length;
    return answer;
}
