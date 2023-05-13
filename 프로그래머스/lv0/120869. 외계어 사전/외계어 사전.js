function solution(spell, dic) {
    let answer = 0;
    // let isSpell = spell.map(item => el.includes(item))
    for(let i = 0; i< dic.length; i++){
        let isSpell = 1;
        spell.forEach(item => isSpell *= dic[i].includes(item))
        if(isSpell == 1) return 1
    } 
    return 2;
}
                 