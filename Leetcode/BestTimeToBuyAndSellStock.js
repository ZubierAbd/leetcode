// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve

//[7,1,5,3,6,4]
//Buy on day 2 at 1, sell on day 3 at 5 = 4 
//Buy on day 4 at 3 and sell at day 5 at 6 = 3 
//Total profit 7

var maxProfit = function (prices) {
    //Add price delta to profit if price is increasing
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i]
        }
    }
    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))