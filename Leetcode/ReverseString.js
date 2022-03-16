const reverse = (s) => {
    let answer = [];
    for (let i = s.length - 1; i >= 0; i--) {
        answer.push(s[i])
    }
    return answer;
}

console.log(reverse(['h', 'e', 'l', 'l', 'o']))
console.log(reverse("WORDS".split("")))