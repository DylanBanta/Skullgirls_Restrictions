const charCount = 14; //number of characters in SG
var characters = ["Squiggly", "Big Band", "Eliza", "Ms. Fortune", "Peacock", "Painwheel", "Filia", "Cerebella", "Valentine", "Parasoul", "Double", "Fukua", "Beowulf", "Robo Fortune"];

//0 == random team size
var p1_maxTeamSize = 0;
var p2_maxTeamSize = 0;

async function onPageLoad() {
  var option = '';
  for (var i = 0; i < characters.length; i++) {
    option += '<option id="p1_left_option' + i + '" ondblclick=\'p1_moveItem("' + characters[i].toString() + '",\"right\")\'>' + characters[i] + '</option>';
    console.log(option);
  }

  await sleep(5);
  appendData($("#p1_leftList"), option);
  appendData($("#p2_leftList"), option);
  console.log("Page Loaded");
}
onPageLoad();



function p1_moveItem(movedItem, direction) {
  var lList = $(".lSelect");
  var rList = $(".rSelect");

  var selected;
  var i;
  var option;

  if (direction == "left") {
    $(".rSelect option:selected").each(function() {
      selected = $(this).text();
      i = lList[0].length;
      console.log("i | " + i);
      option = '<option id="p1_left_option' + i + '" ondblclick=\'p1_moveItem("' + selected + '",\"right\")\'>' + selected + '</option>';
      console.log(selected);
      $(this).remove();
      lList.append(option);
    });
  } else if (direction == "right") {
    $(".lSelect option:selected").each(function() {
      selected = $(this).text();
      i = rList[0].length;
      console.log("i | " + i);
      console.log("maxSize | " + p1_maxTeamSize);
      if(i <= p1_maxTeamSize){
        option = '<option id="p1_right_option' + i + '" ondblclick=\'p1_moveItem("' + selected + '",\"left\")\'>' + selected + '</option>';
        console.log(selected);
        $(this).remove();
        rList.append(option);
      }
    });
  }
}

function p1cc_radio(value) {
  var char1 = $("#p1_charList1");
  var char2 = $("#p1_charList2");
  var char3 = $("#p1_charList3");
  var label = $("#charLabel");

  var labelTxt = "Choose Your Character";

  if (value == null) {
    value = $("input[name='p1cc']:checked").val();
    console.log("p1cc_radio value | " + value);
  }
  if (value == 0){
    //TODO Random
    p1cc_radio(3);
  } else if (value == 1) {
    char1.show();
    char2.hide();
    char3.hide();
    label.html(labelTxt);
    console.log(label.html);
  } else if (value == 2) {
    char1.show();
    char2.show();
    char3.hide();
    label.html(labelTxt + "s");
  } else if (value == 3) {
    char1.show();
    char2.show();
    char3.show();
    label.html(labelTxt + "s");
  } else {
    console.log("p1cc_radio| Error | value out of scope: " + value);
  }

  p1_maxTeamSize = value -1;
}

function p1_RandChar() { //Triggers when P1 Random Characters Checkbox changed
  var p1 = $("#p1_randChar").is(":checked"); //if checked returns true
  var hideRand = $("#p1cc_hideRandom");
  var charSelect = $("#p1_charSelect");
  if (p1) { //when checkbox is true
    charSelect.hide(); //Hide charSelect
    hideRand.show(); //display Random
  } else { //when checkbox is false
    hideRand.hide(); //Hide Random
    charSelect.show(); //Show char select
    if (p1_cc_0.checked == true) {
      p1_cc_0.checked = false;
      p1_cc_1.checked = true;
    }
    p1cc_radio();
  }
}
