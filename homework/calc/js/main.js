$(document).ready(function(){
  var keyNumbers = [48,49,50,51,52,53,54,55,56,57];
  var prevValue = 0;
  Operator.previousOperator = Operator.default;

  $('.operand').on('click', function(){
    updateScreen($(this).text());
  });

  $('#clear').on('click', function(){
    Operator.clear();
    prevValue = 0;
  });

  $('#add').on('click', function(){
    executePrevious();
    Operator.previousOperator = Operator.addition;
  });

  $('#subtract').on('click', function(){
    executePrevious();
    Operator.previousOperator = Operator.subtraction;
  });

  $('#multiply').on('click', function(){
    executePrevious();
    Operator.previousOperator = Operator.multiply;
  });

  $('#divide').on('click', function(){
    executePrevious();
    Operator.previousOperator = Operator.divide;
  });

  $('#evaluate').on('click', function(){
    executePrevious();
    Operator.previousOperator = Operator.default;
  });

  $(document).on('keypress', function(e){
    updateScreen(String.fromCharCode(e.which));
  });

  var executePrevious = function(){
    var $screen = $('#top-screen');
    var currentValue = $screen.text();
    var answer = Operator.previousOperator.evaluate(parseFloat(prevValue));
    Operator.currentOperand = answer;
    $screen.text(answer);
    prevValue = 0;
  }

  var updateScreen = function(currentValue){
    var $screen = $('#top-screen');
    var newValue = parseFloat(prevValue + '' + currentValue);
    $screen.text(newValue);
    prevValue = newValue;
  }
});

var Operator = {};

Operator.clear = function(){
  $('#top-screen').text('0');
  Operator.currentOperand = undefined;
  Operator.previousOperator = Operator.default;
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

