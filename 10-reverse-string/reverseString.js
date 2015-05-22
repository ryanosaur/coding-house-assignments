var Rev = {};

Rev.reverseString = function(textToReverse){
    var words = textToReverse.split(' ');
    
    return words.map(Rev.reverseWord).join(' ');
};

Rev.reverseWord = function(word){
    return word.split('').reverse().join('');
};