function reverseWords(message) {

    let start = 0;
    reverseArray(message, start, message.length - 1);

    for (let i = 0; i <= message.length; i++) {
        if (i === message.length || message[i] === ' ') {
            reverseArray(message, start, i - 1);
            start = i + 1;
        }
    }
}

function reverseArray(arr, start, end) {

    let mid = Math.floor((start + end) / 2);
    let tail = end;
    let temp;
    for (let i = start; i <= mid; i++) {
        temp = arr[i];
        arr[i] = arr[tail];
        arr[tail] = temp;
        tail--;
    }
}
