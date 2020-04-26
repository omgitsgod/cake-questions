function mergeRanges(meetings) {

    let arr = []
    let sorted = meetings.sort((a, b) => a.startTime - b.startTime)


    for (let i = 0; i < sorted.length; i++) {
        let meeting = sorted[i]
        let last = arr[arr.length - 1] || { endTime: 0 }
        if (last.endTime > meeting.startTime) { continue }
        for (let j = i + 1; j < sorted.length; j++) {
            let next = sorted[j]
            if (meeting.endTime >= next.startTime && meeting.endTime < next.endTime) {
                meeting.endTime = next.endTime
                endTime = next.endTime
            }
        }
        arr.push(meeting)
    }
    return arr;
}

