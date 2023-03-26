function solution(money) {
    var answer = [];
    let americano = 5500
//     아메리카노금액만큼 가진 돈 나눠고 정수만 배열에 푸쉬
    answer.push(Math.floor(money / americano))
//     위에서 가진돈 만큼 나눈 값을 0번째 배열에 넣었으니 다시 꺼내와서 
//     구입가능한 아메리카노 금액을 뺀 나머지 금액을 배열에 푸쉬함
    answer.push(money-(americano * answer[0]))
    return answer;
}