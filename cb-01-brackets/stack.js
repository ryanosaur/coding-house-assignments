var BracketMatcher = {};

BracketMatcher.matchBrackets = function(string) { 
    var stack = [];
    return string.split('').reduce(function(size, char){
        if(char === '{' || char === '}'){
            stack.indexOf(char) ? stack.push(char) : stack.pop();
        }
        return stack.length;
    }, 0) ? false : true;
};

function assertEquals(actual, expected){
    return actual === expected ? 'PASS' : _throw('Error parsing curly braces');
};

function _throw(message){
    throw new SyntaxError(message);
};

var bracketsMatch = '{}{}{}{{}}';
console.log(assertEquals(BracketMatcher.matchBrackets(bracketsMatch), true));

var bracketsDontMatch = '{{}{}{}{}';
console.log(assertEquals(BracketMatcher.matchBrackets(bracketsDontMatch), false));

var bracketsMatchWithText = '{}{so}{me}{te{}xt}';
console.log(assertEquals(BracketMatcher.matchBrackets(bracketsMatchWithText), true));

var bracketsDontMatchWithText = '{{so}{me}{te{}xt}';
console.log(assertEquals(BracketMatcher.matchBrackets(bracketsDontMatchWithText), false));