function solution(cards1, cards2, goal) {
    var answer = '';
    let arr1 = [...cards1];
    let arr2 = [...cards2];
    console.log(arr1)
for(let i= 0; i< goal.length; i++ ){
    arr1[0] === goal[i] ? arr1.shift() : arr2[0] === goal[i] ?  arr2.shift(): answer = "No";
}
    return answer || "Yes"  ;
}