// 왼손 *(1,4,7) / 오른손 #(3,6,9)
// (2,5,8,0) 손잡이에 따라서
// numbers 누를번호 / hand 손잡이
// 누를 번호를 리턴 
// 왼손값 넣어주고 오른손 넣어주고 가운데
function solution(numbers, hand) {
    var answer = '';
    let 왼손 = [1,4,7,'*'];
    let 오른손 = [3,6,9,'#'];
    let 가운데 = [2,5,8,0];
    const phone =
     [[3, 1],[0, 0],[0, 1],[0, 2],[1, 0],[1, 1],[1, 2],[2, 0],[2, 1],[2, 2]];
    let 왼손위치 = [3,0];
    let 오른손위치 = [3,2];
    
   numbers.forEach((n) => {
    console.log('위치',n, phone[n])

       
       if(왼손.includes(n)){
            answer += 'L';
            왼손위치 =  phone[n];
       } else if (오른손.includes(n)) {
           answer += 'R';
           오른손위치 =  phone[n];
       }else {
       let 오른손차이 = Math.abs((phone[n][0] - 오른손위치[0])) + Math.abs((phone[n][1]  - 오른손위치[1]));
           let 왼손차이 = Math.abs((phone[n][0] - 왼손위치[0])) + Math.abs((phone[n][1]  - 왼손위치[1]));
           if(오른손차이 === 왼손차이){
               if(hand === 'left'){
                   answer += 'L'
                   왼손위치 =  phone[n];   
               }else {
                   answer += 'R'
                   오른손위치 =  phone[n];      
               }
           }else{
               if(오른손차이 > 왼손차이) {
               answer += 'L';
               왼손위치 = phone[n];
                }else {
                answer += 'R';
               오른손위치 =  phone[n];
                }
           }
       }
   })
    
    return answer;
}