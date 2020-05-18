function highestProductOf3(arrayOfInts) {

    if (arrayOfInts.length < 3) {
        throw new Error('Nope!');
    }

    let highestOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
    let highestOf2 = arrayOfInts[0] * arrayOfInts[1];
    let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    let lowestOf2 = arrayOfInts[0] * arrayOfInts[1];
    let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

    for (let i = 2; i < arrayOfInts.length; i++) {

        let current = arrayOfInts[i];

        highestOf3 = Math.max(highestOf3, current * highestOf2, current * lowestOf2);
        highestOf2 = Math.max(highestOf2, current * highest, current * lowest);
        lowestOf2 = Math.min(lowestOf2, current * highest, current * lowest);
        highest = Math.max(highest, current);
        lowest = Math.min(lowest, current);
    }

    return highestOf3;
}
