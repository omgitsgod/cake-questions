function getProductsOfAllIntsExceptAtIndex(intArray) {

    if (intArray.length < 2) {
        throw new Error('Nope');
    }

    const arr = [];
    let product = 1;

    for (let i = 0; i < intArray.length; i++) {
        arr[i] = product;
        product *= intArray[i];
    }

    product = 1;

    for (let n = intArray.length - 1; n >= 0; n--) {
        arr[n] *= product;
        product *= intArray[n];
    }

    return arr;
}
