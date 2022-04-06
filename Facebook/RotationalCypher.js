function caesarCipher(input, n) {
    let test = '';
    for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        if (!isNaN(letter)) {
            test += Number(letter) + n % 10;
        }
        else if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {

            let t = (input.charCodeAt(i) - 65 + n) % 26;
            test += String.fromCharCode(t + 65);
        }
        else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
            let t = (input.charCodeAt(i) - 97 + n) % 26;
            test += String.fromCharCode(t + 97);
        } else {
            test += letter;
        }
    }
    return test

}

console.log(caesarCipher('Zebra-493?', 3))