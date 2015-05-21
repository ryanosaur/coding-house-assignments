var Pal = {};

Pal.countPalindrome = function(textToCheck){
    
    var array = textToCheck.split(" ");
    var arrayToReturn = [];
    
    var boolArray = array.map(function(element){
        arrayToReturn.push(Pal.isPalindrome(element));
    });
    
    return arrayToReturn;
};

Pal.isPalindrome = function(element){
    return element === element.split('').reverse().join('');  
};