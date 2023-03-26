function solution(price) {
//     가격이 높은순으로 순차적으로 할인 케이스를 if문을 타서 해당되면 할인율 적용해서 답 넣어주기
    if(price >= 500000 ) {
       return Math.floor(price - (price * 0.2));
    } else if (price >= 300000) {
        return Math.floor(price - (price * 0.1));
    } else if (price >= 100000) {
        return Math.floor(price - (price * 0.05));
    }
    return price;
}