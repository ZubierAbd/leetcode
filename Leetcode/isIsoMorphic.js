function isIsoMorphic(s, t) {
    //two words are isomorphic if the letters in s can be replaced with the letters in t
    //First thing - we can check length. Won't be iso if length dont match
    if (s.length !== t.length) {
        return false;
    }
    let f1 = new Map();
    let f2 = new Map();

    for (let letter of s) {
        f1.set(letter, (f1.get(letter) | 1))
    }
    for (let letter of t) {
        f2.set(letter, (f2.get(letter) | 1))
    }

}

console.log(isIsoMorphic('abda', 'svs'))