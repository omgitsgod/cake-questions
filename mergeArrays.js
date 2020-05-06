function mergeArrays(myArray, alicesArray) {

    let arr = [];

    while (myArray.length > 0 && alicesArray.length > 0) {
        if (myArray[0] < alicesArray[0] || alicesArray.length === 0) {
            arr.push(myArray.shift());
        } else if (myArray[0] > alicesArray[0] || myArray.length === 0) {
            arr.push(alicesArray.shift());
        }
    }

    return [...arr, ...myArray, ...alicesArray];
}
