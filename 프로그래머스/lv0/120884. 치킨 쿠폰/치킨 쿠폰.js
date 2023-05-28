function solution(chicken) {
    let chickens = chicken;
    let service = 0;
    while(chickens >= 10) {
        chickens -= 10;
        service++;
        chickens++;
        
    }
    return service;
}