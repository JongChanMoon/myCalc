var operand1=0;
var operand2=0;
var operator='';
var val='';
var toggle=false;
var screen = $(".btn.screen");


$(".btn").click(function(e) {
    var btn = $(this).text();
 
    if(!isNaN(btn)||btn==".")
    {
      val+=btn;
      screen.text(val.substring(0,28));
    }
});

$('#divide, #multiply, #minus, #plus, #modulo').click(function(e) {
  operand1 = parseFloat(val);
  operator = $(this).text();
  val="";
});


$('#equal').click(function() {
  operand2 = parseFloat(val);
  result(operator);
});

$('#clear').click(function() {
  screen.text("0.00");
  operand1=0;
  operand2=0;
  operator='';
  val='';

});

$('#sign').click(function() {
  if(toggle==true){
    val="";
    screen.text("");
    toggle=false;
  }else{
    val="-";
    screen.text(val);
    toggle=true;
  }
  
});


var result = function(operator) {
  switch(operator){
    case "+":
         screen.text(operand1+operand2);
         break;
    case "-":
         screen.text(operand1-operand2);
         break;
    case "x":
         screen.text(operand1*operand2);
         break;
    case "/":
         screen.text(operand1/operand2);
         break;
    case "%":
          screen.text(operand1%operand2);
          break;

  }
  val="";
};



