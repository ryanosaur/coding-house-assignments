var Split = {};

Split.splitSum = function(string, delimiter){
    return Split.argsSum(string.split(delimiter).map(Number));
};

Split.argsSum = function(numberArray){
    return numberArray.reduce(function(acc, current){
        return acc + current;
    }, 0);
};

result = Split.splitSum("3:4:5:1", ":");
console.log(result); // 13
result = Split.splitSum("-1$-5$5$-4", "$");
console.log(result); // -5