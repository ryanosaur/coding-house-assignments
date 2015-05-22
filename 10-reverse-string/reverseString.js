var Rev = {};

Rev.reverseString = function(textToReverse){
    return textToReverse.split(' ').map(Rev.reverseWord).join(' ');
};

Rev.reverseWord = function(word){
    word = Rev.reverse(word, '');
    
    if(word.includes(','))
        word = Rev.reverse(word, ',');
    else if(word.includes('.'))
        word = Rev.reverse(word, '.');
    
    return word;
};

Rev.reverse = function(word, char){
    return word.split(char).reverse().join(char);
};