function isValid(s) {
    openB = ["(", "[", "{"]
    closeB = [")", "]", "}"]
    stack = []
    for (c of s) {
        if (openB.includes(c)) {
            stack.push(openB.indexOf(c))
            console.log(stack);
        }

        else if (closeB.indexOf(c) != stack.pop()) return false
    }

    if (stack.length === 0) return true
    return false
}

console.log(isValid('({})'))