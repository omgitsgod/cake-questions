function hasPalindromePermutation(theString) {

    let tracker = {};
    let evens = 0;
    let odds = 0;

    for (let i = 0; i < theString.length; i++) {
        if (!tracker[theString[i]]) {
            tracker[theString[i]] = 1;
            ++odds;
        } else {
            ++tracker[theString[i]];
            if (tracker[theString[i]] % 2 === 0) {
                --odds;
                ++evens;
            } else {
                --evens;
                ++odds;
            }
        }
    }

    return (odds <= 1);
}
