var Stack = function(){
    this.array = [];
};

Stack.prototype.push = function(char){
    this.array.push();
};

Stack.prototype.pop = function(){

};

function bracketMatcher(string) { 

  // code goes here  
  return true; 
};

function assertEquals(actual, expected){
    return actual === expected ? 'PASS' : throw new SyntaxError('Error parsing curly braces');
};

function log(object){
    console.log(object);
};

var bracketsMatch = '{}{}{}{{}}';
console.log(assertEquals(bracketMatcher(bracketsMatch), true));

var bracketsDontMatch = '{}{}{}{{}';
console.log(assertEquals(bracketMatcher(bracketsDontMatch), false));