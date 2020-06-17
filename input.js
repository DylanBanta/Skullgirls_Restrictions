var p1cc_0 = document.getElementById("p1_cc_0");
var p1cc_Value = p1cc_0.value;

function p1cc_radio(){
  if(p1cc_Value == 0){ //if random was selected
    p1cc_0.checked = false; //uncheck option 0 (random)
    p1cc_1.checked = true; //check option 1 (1)
    p1cc_radio(); //run this function again with new values
  } else if (p1cc_Value == 1) {
    p1nrc_char1.hidden = false;
    p1nrc_char1.hidden = true;
    p1nrc_char1.hidden = true;
  } else if (p1cc_Value == 2){
    p1nrc_char1.hidden = false;
    p1nrc_char1.hidden = false;
    p1nrc_char1.hidden = true;
  } else if (p1cc_Value == 3){
    p1nrc_char1.hidden = false;
    p1nrc_char1.hidden = false;
    p1nrc_char1.hidden = false;
  }
}

function p1RandChar(){ //Triggers when P1 Random Characters Checkbox changed
  var p1 = document.getElementById("p1_randChar").checked;
  var p1cc_1 = document.getElementById("p1_cc_1");
  var p1cc_hideRand = document.getElementById("p1cc_hideRandom");
  var p1_notRandomChars = document.getElementById("p1_notRandomChars");
  if(p1){ //when checkbox is true
    p1_notRandomChars.hidden = true; //Hide p1_notRandomChars
    p1cc_hideRand.hidden = false;//display Random
  } else { //when checkbox is false
    p1cc_hideRand.hidden = true; //Hide Random
    p1cc_0.checked = false;
    p1cc_1.checked = true;
    p1_notRandomChars.hidden = false; //display p1_notRandomChars
  }
}
