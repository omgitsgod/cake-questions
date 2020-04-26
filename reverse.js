function reverse(arrayOfChars) {

    let mid = Math.floor(arrayOfChars.length / 2)
    let temp
    for (let i = 0; i < mid; i++) {
        temp = arrayOfChars[i]
        arrayOfChars[i] = arrayOfChars[arrayOfChars.length - 1 - i]
        arrayOfChars[arrayOfChars.length - 1 - i] = temp
    }
    return temp
}

