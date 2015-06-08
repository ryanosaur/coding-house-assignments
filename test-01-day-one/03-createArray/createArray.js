var ArrayCreator = {};

ArrayCreator.createArrayFromAtoB = function(start, end){
    var array = [];
    for(var i = start; i <= end; i++){
        array.push(i);
    }
    return array;
};

result = ArrayCreator.createArrayFromAtoB(4, 9);
console.log(result); // [4, 5, 6, 7, 8, 9]
result = ArrayCreator.createArrayFromAtoB(-1, 3);
console.log(result); // [-1, 0, 1, 2, 3]
