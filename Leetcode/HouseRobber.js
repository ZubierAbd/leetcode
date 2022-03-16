const houseRobber = houses => {
    var n = houses.length;
    if (n == 0) return 0;
    if (n == 1) return houses[0]

    var test = [];
    test[0] = houses[0]
    test[1] = Math.max(houses[0], houses[1])
    for (var i = 2; i < n; i++) {
        test[i] = Math.max()
    }
}

var houses = [1, 2, 3, 1]
var houses2 = [2, 7, 9, 3, 1]
console.log(houseRobber(houses2))