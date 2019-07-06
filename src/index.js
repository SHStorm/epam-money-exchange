const COIN_TYPES = {
    'H': 50,
    'Q': 25,
    'D': 10,
    'N': 5,
    'P': 1
};

function exchangeForCoins(bank, coinType) {
    const coinValue = COIN_TYPES[coinType];

    const coinsCount = Math.floor(bank.currency / coinValue);
    if (coinsCount > 0) {
        bank.coins[coinType] = coinsCount;
        bank.currency -= coinsCount * coinValue;
    }
}

// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) return {};
    else if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    const bank = {
        currency,
        coins: {}
    };

    exchangeForCoins(bank, 'H');
    exchangeForCoins(bank, 'Q');
    exchangeForCoins(bank, 'D');
    exchangeForCoins(bank, 'N');
    exchangeForCoins(bank, 'P'); // not the best way to calc pennies, but more readable I suppose ))

    return bank.coins;
};
