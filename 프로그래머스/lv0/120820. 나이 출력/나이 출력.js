function solution(age) {
//  내장객체인 date 함수 사용하여 현재 시간을 기점으로 잡을수 있게 함
    let date = new Date();
//   getFullYear 메서드로 dete 변수에 담긴 데이터에서 년도 4자리만 떼와서 age를 빼줘서 현재 나이 구함
    return date.getFullYear() - age;
}