function sortScores(unorderedScores, highestPossibleScore) {

    const counts = new Array(highestPossibleScore + 1).fill(0);

    unorderedScores.forEach(x => {
        counts[x]++;
    });

    const scores = [];

    for (let score = highestPossibleScore; score >= 0; score--) {
        let count = counts[score];

        for (let time = 0; time < count; time++) {
            scores.push(score);
        }
    }

    return scores;
}
