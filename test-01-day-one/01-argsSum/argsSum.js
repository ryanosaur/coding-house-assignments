var Sum = {};

Sum.argsSum = function(){
    return Array.prototype.slice.call(arguments).reduce(function(acc, current){
        return acc + current;
    }, 0);
};

result = Sum.argsSum(3,7,8);
console.log(result); // 18
result = Sum.argsSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1);
console.log(result); // 14