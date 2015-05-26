String.prototype.binaryToDecimal = function(){
    return this.split('').map(Number).reverse()
        .reduce(function(previousValue, currentValue, index, array) {
            return previousValue + (currentValue * Math.pow(2, index));
        }, 0);
};

function convert(){
    assert_equal("11001010".binaryToDecimal(), 202);
    assert_equal("1110".binaryToDecimal(), 14);
    
};

function assert_equal(actual, expected) {
    if (actual !== expected)
        throw new Error('expected ' + expected + ' but got ' + actual);
    else
        console.log(actual);
};