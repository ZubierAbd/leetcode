//Given two numbers in linkedList form, convert them into numbers add them and then return the answers in linkedList form

function addTwoNumbers(l1, l2) {
    let x1 = []
    let x2 = []
    let x3 = [];

    while (l1) {
        x1.push(l1.val)
        l1 = l1.next
    }

    while (l2) {
        x2.push(l2.val)
        l2 = l2.next;
    }

    x3 = (BigInt(x1.reverse().join('')) + BigInt(x2.reverse().join(''))).toString().split('').reverse().join('');
}