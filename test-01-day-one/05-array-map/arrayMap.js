var array = [4,28,6,16,26,12];
var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

result = array.map(function(e){ 
    return key[e/2]; 
}).join('');

console.log(result); // CODING