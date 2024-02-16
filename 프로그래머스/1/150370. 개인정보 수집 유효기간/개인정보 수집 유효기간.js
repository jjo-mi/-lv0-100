function solution(today, terms, privacies) {
    var answer = [];
    // trems의 기간을 일수로 변경
    // 해당월의 일수를 환산해서 숫자가 남았다면 카운트를 증가 
    // 총 다 더해줬다면 그 날짜가 오늘을 넘으면 넘김

    const now = new Date(today);
    console.log(now);
    const termsObj = {};
    terms.forEach((item)=>{
        const [type, term] = item.split(" ");
        termsObj[type] = Number(term);
    })
    
    privacies.forEach((item, index)=>{

        const [date, type] = item.split(" ");
        const currentDate = new Date(date);
        
        currentDate.setMonth(currentDate.getMonth() + termsObj[type])
        
        if(now >= currentDate){
            answer.push(index+1)
        }
        
    })
    console.log(termsObj);
    
    return answer;
}