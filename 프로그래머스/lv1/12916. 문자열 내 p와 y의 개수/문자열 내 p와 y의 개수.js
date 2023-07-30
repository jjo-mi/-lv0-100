function solution(s){
    const sArr = s.split('');
    
    let p = sArr.filter(word => word == 'p'|| word == 'P');
    let y = sArr.filter(word => word == 'y'|| word == 'Y')
    return  p.length === y.length ? true : false;
}