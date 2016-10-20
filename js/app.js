'use strict';
$( document ).ready(function() {
      console.log( "document loaded" );

var calcScreen = $('#screen');
var operator = $('span');
var clear = $('#clear');
var equals = $('#equals');

operator.on('click', function() {
  if ($(this).text() === 'C' || $(this).text() === '=' ) {
      return;
  } else {
    calcScreen.append($(this).html());
  }
});

//if clear on click. clear screen
clear.on('click', function(){
clear.empty();
});

// if equals is click then eval()
equals.on('click', function (){
equals.eval();  
});

});
