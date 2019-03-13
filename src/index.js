module.exports = function makeExchange(currency) {
    var money = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    var change = {};

    if (currency === 0) {
        return change;
    }

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
   
    if (currency >= money.H) {
        change.H = Math.floor(currency / money.H);
        currency = currency % money.H;
    }

    if (currency >= money.Q) {
        change.Q = Math.floor(currency / money.Q);
        currency = currency % money.Q;
    }

    if (currency >= money.D) {
        change.D = Math.floor(currency / money.D);
        currency = currency % money.D;
    }

    if (currency >= money.N) {
        change.N = Math.floor(currency / money.N);
        currency = currency % money.N;
    }

    if (currency >= money.P) {
        change.P = Number(currency);
    }

    return change;
}