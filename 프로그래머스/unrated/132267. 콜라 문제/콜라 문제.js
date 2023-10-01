function solution(a, b, n) {
    var total = 0;
    let colaCnt = n;
    let getCola = 0;
    
    while(colaCnt >= a){
        // 바꾸고 얻을 수 있는 콜라 수 계산
        getCola = parseInt(colaCnt /a) *b;
        // 얻을 수 잇는 콜라 수 누계
        total += getCola;
        // 현재 남은 콜라병 수
        colaCnt = getCola + colaCnt%a;
            }
    
    return total;
}