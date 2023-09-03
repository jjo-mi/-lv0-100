function solution(d, budget) {
    let okArr = d.sort((a,b) => a - b).filter(el => {
            if(budget - el >= 0){
                budget -= el;
                return true;
            }
            return false
        })
   return okArr.length;
    
}
    