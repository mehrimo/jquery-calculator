'use strict';
$( document ).ready(function() {
      console.log( "document loaded" );

var calcScreen = $('#screen');
var operator = $('span');
var clear = $('#clear');
var equals = $('#equals');

operator.on('click', function() {
  if ($(this).text() === 'C' || $(this).text() === '=' ) {
      console.log('C');
  } else {
    calcScreen.append($(this).html());
  }
});

//if clear on click. clear screen
clear.on('click', function(){
calcScreen.empty();
});

equals.on('click',function () {
try {
  var answer = eval(calcScreen.text());
  calcScreen.empty();
  calcScreen.append(answer);
} catch (e) {
  calcScreen.empty();
  calcScreen.append(ERROR);
}
});



});
