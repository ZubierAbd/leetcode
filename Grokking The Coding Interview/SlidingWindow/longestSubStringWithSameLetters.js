// Given a string with lowercase letters only, 
//if you are allowed to replace no more than k letters with any letter, 
//find the length of the longest substring having the same letters after replacement.

function longest_substring_with_k_letter_replacements(str, k) {

    let start = 0,
        maxLength = 0,
        maxRepeatLetterCount = 0,
        charMap = {};

    for (let end = 0; end < str.length; end++) {
        const rightChar = str[end];
        if (!(rightChar in charMap)) {
            charMap[rightChar] = 0;
        }
        charMap[rightChar] += 1;
        maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);
        // Current window size is from windowStart to windowEnd, overall we have a letter which is
        // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
        // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
        // if the remaining letters are more than 'k', it is the time to shrink the window as we
        // are not allowed to replace more than 'k' letters
        if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
            leftChar = str[windowStart];
            frequencyMap[leftChar] -= 1;
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;

}