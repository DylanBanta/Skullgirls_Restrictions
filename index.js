//Global variables
var characters = ["Squiggly", "Big Band", "Eliza", "Ms. Fortune", "Peacock", "Painwheel", "Filia", "Cerebella", "Valentine", "Parasoul", "Double", "Fukua", "Beowulf", "Robo Fortune"];
var maxTeamSize = 0; //0 == random team size

//Returns a copy of character global array to randomCharacter, otherwise global variable is overwritten
function copyChar() {
  var charCopy = [];
  for (var i = 0; i < characters.length; i++) {
    charCopy.push(characters[i]);
  }
  return charCopy;
}

//Returns array of unique random characters (min 1)
function randomCharacter(count) {
  var randChar;
  var charCopy = copyChar();
  var randCharArr = [];
  var currentChar;
  var index;

  for (var i = 0; i < count; i++) {
    randChar = Math.random() * (charCopy.length);
    randChar = Math.floor(randChar);
    currentChar = charCopy[randChar];
    randCharArr.push(currentChar);
    charCopy.splice(randChar, 1);
  }
  return randCharArr;
}

function roll(player) {
  var numChars;
  var randChars;
  var results;

  if (player == 1) {
    numChars = $("input[name='p1cc']:checked").val();
    randChars = $("input[name='p1_randBool']:checked").val();
  }
  else if (player == 2) {
    numChars = $("input[name='p2cc']:checked").val();
    randChars = $("input[name='p2_randBool']:checked").val();
  }

  if (numChars == 0) { //Random Amount of characters
    //Chooses how many characters to randomly select
    var rand = Math.random() * 3;
    rand = Math.floor(rand);
    rand++;
    numChars = rand;
  }

  if (randChars == "on") {
    results = randomCharacter(numChars);
    $(p1_roll).html("");
    for (var i = 0; i < numChars; i++) {
      appendData(p1_roll, results[i] + " | ");
    }
  }
  else {

  }
}

function randChar(player) { //Triggers when Random Characters Checkbox changed
  var p1; //if checked returns true
  var hideRand;
  var charSelect;
  var pcc0;
  var pcc3;

  if (player == 1) {
    p1 = $("#p1_randChar").is(":checked"); //if checked returns true
    hideRand = $("#p1cc_hideRandom");
    charSelect = $("#p1_charSelect");
    pcc0 = "#p1_cc_0";
    pcc3 = "#p1_cc_3";
  }
  else if (player == 2) {
    p1 = $("#p2_randChar").is(":checked"); //if checked returns true
    hideRand = $("#p2cc_hideRandom");
    charSelect = $("#p2_charSelect");
    pcc0 = "#p2_cc_0";
    pcc3 = "#p2_cc_3";
  }

  if (p1) { //when checkbox is true
    charSelect.hide(); //Hide charSelect
    hideRand.show(); //display Random
  }
  else { //when checkbox is false
    hideRand.hide(); //Hide Random
    charSelect.show(); //Show char select
    if ($(pcc0).is(":checked")) {
      //console.log($(pcc0).prop("checked"));
      $(pcc0).prop("checked", false);
      $(pcc3).prop("checked", true);
    }
    pcc_radio(player, 3);
  }
}