HappyNumber.isHappyNumber = function(number){
  HappyNumber.seen = [];
  return HappyNumber.verify(number);
};

HappyNumber.verify = function(number){
  var digits = HappyNumber.getArrayOfDigitsFromNumber(number);
  var product = digits.reduce(function(acc, digit){
    return acc + HappyNumber.square(digit);
  }, 0);
  return product === 1 ? true : HappyNumber.shouldExecuteAgain(product);
};

HappyNumber.shouldExecuteAgain = function(number){
  if(HappyNumber.seen.indexOf(number) >= 0)
    return false;
  HappyNumber.seen.push(number);
  return HappyNumber.verify(number);
};

HappyNumber.square = function(number){
  return number * number;
};

HappyNumber.getArrayOfDigitsFromNumber = function(number){
  return (number + '').split('').map(Number);
};

console.log(HappyNumber.isHappyNumber(19)); // true
console.log(HappyNumber.isHappyNumber("19")); // true
console.log(HappyNumber.isHappyNumber(16)); // false