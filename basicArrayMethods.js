const numbers = [1, 2, 3, 4, 5]

const mapped = numbers.map((x) => {
    return x ** 2
})

const reduced = numbers.reduce((a, v) => {
    return a + v;
})



const logIt = input => {
    return console.log(input)
}

logIt(mapped)
logIt(reduced)