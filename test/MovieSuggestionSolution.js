const movies = require('./movies.json');
const users = require('./users.json');



//Function is based on userID find out the top four watchlisted movies by Friends 

const getTopFourWatchlistedMovies = (userId) => {
    //Go through the users array and see if userId is in there not 
    let user = users.find((input) => input.userId == userId);
    let moviesWatchCounts = [];

    for (let movie of movies) {
        let watchCount = movie.watchlist.reduce((accumulator, value) => {
            if (user.friends.includes(value)) {
                return ++accumulator;
            } else {
                return accumulator;
            }
        }, 0)
        let movieCount = [movie.title, watchCount];
        moviesWatchCounts.push(movieCount);
    }

    let sortedWatchCount = moviesWatchCounts.sort((a, b) => {
        if (a[1] > b[1]) return -1
        if (a[1] == b[1]) {
            if (a[0] < b[0]) return -1;
            if (a[0] === b[0]) return 0;
            if (a[0] > b[0]) return 1;
        }
        if (a[1] < b[1]) return 1;
    })

    let topFour = sortedWatchCount.slice(0, 4).map((x) => {
        return x[0]
    })

    return topFour

}

console.log(getTopFourWatchlistedMovies(15291))