function canTwoMoviesFillFlight(movieLengths, flightLength) {

    let movies = new Set();

    for (let i = 0; i < movieLengths.length; i++) {
        let first = movieLengths[i];
        let needTime = flightLength - first;

        if (movies.has(needTime)) {
            return true;
        }

        movies.add(first);
    }

    return false;
}
