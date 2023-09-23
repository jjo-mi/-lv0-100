function solution(strings, n) {

    strings.sort((a,b) =>{
        if(a[n] > b[n]) return 1; // a가 먼저
        if(a[n] < b[n]) return -1;// b가 먼저
        // n번째 자리수가 같은 글자일 경우는 아래 기준으로
        if(a > b) return 1;
        if(b > a) return -1;
        
        return 0;
    })
    return strings;
}