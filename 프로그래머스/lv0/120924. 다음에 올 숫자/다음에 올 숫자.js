function solution(common) {
    
    if(common[0] - common[1] === common[1] - common[2]){
        return common[1] - common[0] + common.pop()
    }else {
        return (common[1]/common[0] ) * common.pop()
    }
    
}