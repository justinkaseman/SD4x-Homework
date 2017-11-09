
let tempFirst = ""; //variable for holding first number
let tempLast = ""; //variable for holding last number used
let tempOp = ""; //variable for holding operator
let clearDisplay = false; //variable for checking if display should clear

function solve() {
  //divide by 0 case
  if ( ($( '#display' ).val() == 0) && (/\//.test(tempOp)) ) {
    $( '#display' ).val("Infinity");
    clearDisplay = true;
  }
  else {
    tempLast = $( '#display' ).val();
    $( '#display' ).val( eval(tempFirst + tempOp + $( '#display' ).val()) );
    clearDisplay = true;
  };
};

//user clicks numbered button
$( '.numButton' ).click(function() {
  //clear display
  if (clearDisplay) {
    $( '#display' ).val("");
    clearDisplay = false;
  };
  //add clicked to display
  $( '#display' ).val( $( '#display' ).val() + $( this ).val() );
});

//user clicks operator
$( '#addButton' ).click(function() {
    if (tempFirst == "" || clearDisplay || tempLast !== "") {
      tempFirst = $( '#display' ).val()
      tempOp = " + "
      clearDisplay = true;
    } else {
      solve();
      tempFirst = $( '#display' ).val()
      tempOp = " + "
    }
});

$( '#subtractButton' ).click(function() {
  if (tempFirst == "" || clearDisplay || tempLast !== "") {
    tempFirst = $( '#display' ).val()
    tempOp = " - "
    clearDisplay = true;
  } else {
    solve();
    tempFirst = $( '#display' ).val()
    tempOp = " - "
      }
});

$( '#multiplyButton' ).click(function() {
  if (tempFirst == "" || clearDisplay || tempLast !== "") {
    tempFirst = $( '#display' ).val()
    tempOp = " * "
    clearDisplay = true;
  } else {
    solve();
    tempFirst = $( '#display' ).val()
    tempOp = " * "
  }
});

$( '#divideButton' ).click(function() {
  if (tempFirst == "" || clearDisplay || tempLast !== "") {
    tempFirst = $( '#display' ).val()
    tempOp = " / "
    clearDisplay = true;
  } else {
    solve();
    tempFirst = $( '#display' ).val()
    tempOp = " / "
  }
});

//user clicks equals
$( '#equalsButton' ).click(function() {
  //repeat operation if double equals
  if (clearDisplay) {
    if (tempLast !== "" && tempFirst !== ""){
      $( '#display' ).val( eval($( '#display' ).val() + tempOp + tempLast) );
    }
    return;
  } else {
      solve();
    };
});

//user clicks clear: returns to default state
$( '#clearButton' ).click(function() {
  tempFirst = "";
  tempLast = "";
  tempOp = "";
  clearDisplay = false;
  $( '#display' ).val("");
});
