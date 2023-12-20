function solution(clothes) {
    // var answer = 0;
    let obj = {};
    for(let [item,type] of clothes){
        if(obj[type] === undefined){
            obj[type] = 1;
        }else {
            obj[type]++;
        }
    }
    let arr = Object.entries(obj);
    let answer = arr.reduce((acc,[_, cnt]) => {
        return acc*(cnt+1);
    },1);
    console.log(obj, answer)
    return answer-1;
}

//   const clothesObj = {}
//     clothes.forEach(([cloth,type])=>{
//         if(clothesObj[type] === undefined){
//             clothesObj[type] = 1
//         }
//         else{
//             clothesObj[type]++
//         }
//     })

//     const clothesCount = Object.entries(clothesObj).reduce((acc,[_,clothesTypeCount])=>{
//         return acc*(clothesTypeCount+1)
//     },1)

//     // delete no-wear
//     const answer = clothesCount - 1
//     return answer    