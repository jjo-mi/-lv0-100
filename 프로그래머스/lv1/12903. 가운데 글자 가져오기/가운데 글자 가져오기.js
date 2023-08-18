function solution(s) {
    let sCopy = s;
    let mid = s.length / 2;
    let answer = sCopy.substring((parseInt(mid) -1), (parseInt(mid) +1));

    return Number.isInteger(mid) ?  answer: s[parseInt(mid)];
}