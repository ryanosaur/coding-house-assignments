var CoinDeterminer = {};

CoinDeterminer.countCoins = function(totalCurrency){
    var denominations = [1,5,7,9,11];
    
    return denominations.reverse().reduce(function(coins, denomination){
        var currentCoins = Math.floor(totalCurrency / denomination);
        totalCurrency -= currentCoins * denomination;
        return coins += currentCoins;
    }, 0);
};


function assertEquals(actual, expected){
    return actual === expected ? 'PASS' : _throw('Number of coins did not match');
};

function _throw(message){
    throw new Error(message);
};

console.log(assertEquals(CoinDeterminer.countCoins(6), 2));

console.log(assertEquals(CoinDeterminer.countCoins(16), 2));