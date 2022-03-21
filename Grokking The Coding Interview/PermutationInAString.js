//Given string, pattern find out if string contains pattern 

//Sliding window of length pattern size and see if the number of letters match using a hashmap 

//Input = "oidbcaf " pattern = abc  this will return true 
//Input = "oidcf" pattern dc will return false

const permutationInAString = (string, pattern) => {

    let windowStart = 0,
        matched = 0,
        charFrequency = {};

    for (let i = 0; i < pattern.length; i++) {
        const chr = pattern[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }

    for (windowend = 0; windowEnd < string.length; i++) {
        const rightChar = pattern[windowEnd];
        if (rightChar in charFrequency) {
            //Decrement the frequency of the char
            charFrequency[rightChar] -= 1;
            if (charFrequency[right] === 0) {
                matched += 1;
            }
        }
        if (matched === Object.keys(charFrequency).length) {
            return true;
        }

        //This is the most important part - the sliding window 
        if (windowEnd >= pattern.length - 1) {
            leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }
    }
    return false;
}