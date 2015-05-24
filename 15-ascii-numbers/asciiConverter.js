document.onload = convert();

function convert(){
    //part 1
    console.log('the next 6 numbers in sequence are 20, 21, 22, 100, 101, 102');
    
    //part 2? I think this is what you're asking for?
    console.log([73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115].map(function(code){return String.fromCharCode(code)}).join(''));
};