$(document).ready(function(){
  Operator.prevValue = 0;
  var operators = [13,42,43,45,47,61,99];
  Operator.previousOperator = Operator.default;

  $('.operand').on('click', function(){
    Operator.updateScreen($(this).text());
  });

  $('#clear').on('click', function(){
    Operator.clear();
    Operator.previousOperator = Operator.default;
    Operator.prevValue = 0;
  });

  $('#add').on('click', function(){
    Operator.executePrevious();
    Operator.previousOperator = Operator.addition;
  });

  $('#subtract').on('click', function(){
    Operator.executePrevious();
    Operator.previousOperator = Operator.subtraction;
  });

  $('#multiply').on('click', function(){
    Operator.executePrevious();
    Operator.previousOperator = Operator.multiply;
  });

  $('#divide').on('click', function(){
    Operator.executePrevious();
    Operator.previousOperator = Operator.divide;
  });

  $('#evaluate').on('click', function(){
    Operator.executePrevious();
    Operator.previousOperator = Operator.default;
  });

  $(document).on('keypress', function(e){
    console.log(e.which);
    Operator['f'+e.which](e.which);
  });

});

var Operator = {};

Operator.executePrevious = function(){
  var $screen = $('#top-screen');
  var currentValue = $screen.text();
  var answer = Operator.previousOperator.evaluate(parseFloat(Operator.prevValue));
  Operator.currentOperand = answer;
  $screen.text(answer);
  Operator.prevValue = 0;
}

Operator.updateScreen = function(currentValue){
  var $screen = $('#top-screen');
  var newValue = parseFloat(Operator.prevValue + '' + currentValue);
  $screen.text(newValue);
  Operator.prevValue = newValue;
}

Operator.clear = function(){
  $('#top-screen').text('0');
  Operator.currentOperand = undefined;
}

Operator.default = {
  evaluate: function(number){
    return number;
  }
}

Operator.addition = {
  baseOperand: 0,
  evaluate: function(number){
    return Operator.currentOperand + number;
  }
}

Operator.subtraction = {
  baseOperand: 0,
  evaluate: function(number){
    return Operator.currentOperand - number;
  }
}

Operator.multiply = {
  baseOperand: 1,
  evaluate: function(number){
    return Operator.currentOperand * number;
  }
}

Operator.divide = {
  baseOperand: 1,
  evaluate: function(number){
    return Operator.currentOperand / number;
  }
}

Operator.f43 = function(){
  Operator.executePrevious();
  Operator.previousOperator = Operator.addition;
}

Operator.f42 = function(){
  Operator.executePrevious();
  Operator.previousOperator = Operator.multiply;
}

Operator.f47 = function(){
  Operator.executePrevious();
  Operator.previousOperator = Operator.divide;
}

Operator.f45 = function(){
  Operator.executePrevious();
  Operator.previousOperator = Operator.subtraction;
}

Operator.f61 = function(){
  Operator.executePrevious();
  Operator.previousOperator = Operator.default;
}

Operator.f13 = function(){
  Operator.executePrevious();
  Operator.previousOperator = Operator.default;
}

Operator.f99 = function(){
  Operator.executePrevious();
  Operator.previousOperator = Operator.clear;
}

Operator.f48 = function(){
  Operator.updateScreen(String.fromCharCode(arguments[0]));
}

Operator.f49 = Operator.f48;
Operator.f50 = Operator.f48;
Operator.f51 = Operator.f48;
Operator.f52 = Operator.f48;
Operator.f53 = Operator.f48;
Operator.f54 = Operator.f48;
Operator.f55 = Operator.f48;
Operator.f56 = Operator.f48;
Operator.f57 = Operator.f48;
