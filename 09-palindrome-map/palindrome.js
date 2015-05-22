var Pal = {};

Pal.countPalindrome = function(textToCheck){
    var array = textToCheck.split(" ");
    
    return array.map(function(element){
        return Pal.isPalindrome(element);
    });
};

Pal.isPalindrome = function(element){
    return element === element.split('').reverse().join('');  
};