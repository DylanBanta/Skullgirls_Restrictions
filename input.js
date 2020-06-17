var p1cc_0 = document.getElementById("p1_cc_0");
var p1cc_1 = document.getElementById("p1_cc_1");

var p1nrc_char1 = document.getElementById("p1nrc_char1");
var p1nrc_char2 = document.getElementById("p1nrc_char2");
var p1nrc_char3 = document.getElementById("p1nrc_char3");

function p1cc_radio(value){
  if(value == null){
    value = p1cc_0.value;
  }

  if (value == 1) {
    p1nrc_char1.hidden = false;
    p1nrc_char2.hidden = true;
    p1nrc_char3.hidden = true;
  } else if (value == 2){
    p1nrc_char1.hidden = false;
    p1nrc_char2.hidden = false;
    p1nrc_char3.hidden = true;
  } else if (value == 3){
    p1nrc_char1.hidden = false;
    p1nrc_char2.hidden = false;
    p1nrc_char3.hidden = false;
  } else {
    console.log("p1cc_radio| Error | value out of scope: " + value);
  }
}

function p1RandChar(){ //Triggers when P1 Random Characters Checkbox changed
  var p1 = document.getElementById("p1_randChar").checked;
  var p1cc_hideRand = document.getElementById("p1cc_hideRandom");
  var p1_notRandomChars = document.getElementById("p1_notRandomChars");
  if(p1){ //when checkbox is true
    p1_notRandomChars.hidden = true; //Hide p1_notRandomChars
    p1cc_hideRand.hidden = false;//display Random
  } else { //when checkbox is false
    p1cc_hideRand.hidden = true; //Hide Random
    p1_cc_0.checked = false;
    p1_cc_1.checked = true;
    p1_notRandomChars.hidden = false; //display p1_notRandomChars
    p1cc_radio();
  }
}
