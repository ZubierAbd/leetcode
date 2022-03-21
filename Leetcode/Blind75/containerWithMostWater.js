

function containerWithMostWater(heights) {

    //You have an array containing different heights; 
    // You need to find the max area given here 
    // Max area determined by the distance between the tallest adn second tallest points 
    //One issue might be that there might be muliple places with the same height 
    //In that case, we take the furthest

    //Area calc = secondhighestHeight * distance between 
    let ans = 0, i = 0, j = heights.length - 1;

    while (i < j) {
        ans = Math.max(ans, Math.min(heights[i], heights[j]) * (j - i))
        heights[i] <= heights[j] ? i++ : j--;
    }
    return ans;


}