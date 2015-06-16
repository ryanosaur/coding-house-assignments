$(document).ready(function(){
  var prevValue = 0;
  var operators = [13,42,43,45,47,61,99];
  Operator.previousOperator = Operator.default;

  $('.operand').on('click', function(){
    updateScreen($(this).text());
  });

  $('#clear').on('click', function(){
    Operator.clear();
    Operator.previousOperator = Operator.default;
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
    console.log(e.which);
    if(operators.indexOf(e.which) > -1){
      executePrevious();
      Operator.previousOperator = Operator['f'+e.which];
    }
    else{
      updateScreen(String.fromCharCode(e.which));
    }
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

Operator.f43 = Operator.addition; //+
Operator.f42 = Operator.multiply; // *
Operator.f47 = Operator.divide; // /
Operator.f45 = Operator.subtraction; // -
Operator.f61 = Operator.default; // =
Operator.f13 = Operator.default; // enter
Operator.f99 = Operator.clear; // c

