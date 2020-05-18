function getMaxProfit(stockPrices) {

    if (stockPrices.length < 2) {
        throw new Error('Getting a profit requires at least 2 prices');
    }

    let max = stockPrices[1] - stockPrices[0];
    let lowest = stockPrices[0];

    for (let i = 1; i < stockPrices.length; i++) {
        const stockPrice = stockPrices[i];

        max = Math.max(max, stockPrice - lowest);
        lowest = Math.min(lowest, stockPrice);
    }

    return max;
}
