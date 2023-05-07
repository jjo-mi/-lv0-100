function solution(polynomial) {
    let arr =  polynomial.split(" + ")
    let xNum = 0;
    let num = 0;
    
    arr.forEach(el => {
        if(el.includes('x')) {
            const xArr = el.split("x");

            xArr[0] == '' ? xNum += 1 : xNum += parseInt(xArr[0]);
        }
        if(!el.includes('x')) {
           num += parseInt(el);
        }
    
    })
    
// 출력 표현 조건
    if(xNum !== 0 && num !== 0){
        return xNum === 1 ? `x + ${num}` : `${xNum}x + ${num}`;    
    }
    
    if(xNum !== 0 && num === 0){        
        return xNum === 1 ? "x" : `${xNum}x`;
    }
    
    if(xNum === 0 && num !== 0){
        return `${num}`;
    }
    
    if(xNum === 0 && num === 0){
        return "0";
    }
    
}