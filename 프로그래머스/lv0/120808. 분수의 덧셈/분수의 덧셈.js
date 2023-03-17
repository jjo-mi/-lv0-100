//1. 분모
function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    let 분자 = (numer1 * denom2) + (numer2 * denom1)
    let 분모 = (denom1 * denom2) 
    let 작은수 = 0;
    
    if(분모 < 분자) {
        작은수 = 분모;
    }else {작은수 = 분자}
    
    while(true) {
        if(분모 % 작은수 === 0 && 분자 % 작은수 === 0) {
        return[분자 / 작은수, 분모 / 작은수];
        } 
        작은수 = 작은수 - 1;
    }
  
}

