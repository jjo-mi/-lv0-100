function solution(number) {
   const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached); 
    });                                    
    return results; 
  }

   let cnt = 0;
  const resultArr = getCombinations(number, 3);
    resultArr.map(el =>{
        if(0 === el[0]+ el[1]+ el[2]) cnt++
    })
    return cnt;
}