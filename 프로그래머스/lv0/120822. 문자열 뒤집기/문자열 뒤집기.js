function solution(my_string) {
// 글자를 배열로 만들어서 배열의 메서드 중 하나인 reverse로 반전시켜서 저장
    let arr1 = [...my_string]
    let arr2 = arr1.reverse();
// 다시 정답 형태인 string 형태로 만들기 위해 배열 메서드의 join을 씀
    return arr2.join('');
}