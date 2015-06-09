var CoinDeterminer = {};

CoinDeterminer.countCoins = function(number){

    return true;
};


function assertEquals(actual, expected){
    return actual === expected ? 'PASS' : _throw('Number of coins did not match');
};

function _throw(message){
    throw new Error(message);
};

console.log(assertEquals(CoinDeterminer.countCoins(6), 2));

console.log(assertEquals(CoinDeterminer.countCoins(16), 2));