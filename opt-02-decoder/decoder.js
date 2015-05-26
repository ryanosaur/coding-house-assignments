function convert(){
    assert_equal(decodeStr("sfGuisOthO12D|2 6 9 12"), "GOOD");
    assert_equal(decodeStr("01R34E6D|2 5 7"), "RED");
};

function decodeStr(encoded){
    var message = encoded.match(/([a-zA-Z0-9]*)/)[0].split('');
    var key = encoded.match(/[|].*$/)[0].substring(1).split(' ').map(Number);
    
    return key.map(function(keyVal){
        return message[keyVal];
    }).join('');
};

function assert_equal(actual, expected) {
    if (actual !== expected)
        throw new Error('expected ' + expected + ' but got ' + actual);
    else
        console.log(actual);
};