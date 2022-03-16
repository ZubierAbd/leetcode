// Given a string, find the length of the longest substring, which has all distinct characters.

//Input : "aabccbb"
//Answer : abc 

//Input : abbbb
//Answer : ab

//Input: abccde
//Answers : abc cde 

function non_repeat_substring(str) {
    let windowStart = 0;
    let maxLength = 0;
    let charIndexMap = {}

    for (let windowend = 0; windowend < str.length; windowend++) {
        const rightChar = str[windowend];

        // if the map already contains the 'rightChar', shrink the window from the beginning so that
        // we have only one occurrence of 'rightChar'
        if (rightChar in charIndexMap) {
            // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
            // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        }
        // insert the 'rightChar' into the map
        charIndexMap[rightChar] = windowEnd;
        // remember the maximum length so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}