function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    let takeOut = 0
    let dineIn = 0
    let served = 0

    if (servedOrders.length !== takeOutOrders.length + dineInOrders.length) {
        return false
    }

    while (served < takeOutOrders.length + dineInOrders.length) {
        if (servedOrders[served] === takeOutOrders[takeOut]) {
            ++takeOut
            ++served
        } else if (servedOrders[served] === dineInOrders[dineIn]) {
            ++dineIn
            ++served
        } else return false
    }

    if (served === takeOutOrders.length + dineInOrders.length) return true
    else return false
}
