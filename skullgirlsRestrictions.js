const charCount = 14; //number of characters in SG
var characters = ["Squiggly", "Big Band", "Eliza", "Ms. Fortune", "Peacock", "Painwheel", "Filia", "Cerebella", "Valentine", "Parasoul", "Double", "Fukua", "Beowulf", "Robo Fortune"];

//0 == random team size
var maxTeamSize = 0;

async function onPageLoad() {
  var p1_option = '';
  var p2_option = '';
  var p1_id = "p1_left_option";
  var p2_id = "p2_left_option";

  var character;

  for (var i = 0; i < characters.length; i++) {
    character = characters[i].toString();
    p1_option += '<option id="p1_left_option' + i + '" ondblclick=\'moveSelectOptions(1,"' + characters[i].toString() + '",\"right\")\'>' + characters[i] + '</option>';
    p2_option += '<option id="p2_left_option' + i + '" ondblclick=\'moveSelectOptions(2,"' + characters[i].toString() + '",\"right\")\'>' + characters[i] + '</option>';
  }

  await sleep(5);
  appendData($("#p1_leftList"), p1_option);
  appendData($("#p2_leftList"), p2_option);
}
onPageLoad();

function moveSelectOptions(player, movedItem, direction) {
  console.log(player, movedItem, direction);

  var lList;
  var rList;
  var id;
  var pNum;

  if (player == 1) {
    lList = $(".p1_lSelect");
    rList = $(".p1_rSelect");
    id = "p1_left_option";
    pNum = 1;
  } else if (player == 2) {
    lList = $(".p2_lSelect");
    rList = $(".p2_rSelect");
    id = "p2_left_option";
    pNum = 2;
  }

  var selected;
  var i;
  var option;

  if (direction == "left") {
    $(rList).find("option:selected").each(function() {
      selected = $(this).text();
      i = lList[0].length;
      option = '<option id="' + id + "" + i + '" ondblclick=\'moveSelectOptions(' + pNum + ',"' + selected + '",\"right\")\'>' + selected + '</option>';
      $(this).remove();
      lList.append(option);
    });
  } else if (direction == "right") {

    //value = $("input[name='p1cc']:checked").val();

    $(lList).find("option:selected").each(function() {
      selected = $(this).text();
      i = rList[0].length;
      if (i <= maxTeamSize) {
        option = '<option id="' + id + "" + i + '" ondblclick=\'moveSelectOptions(' + pNum + ',"' + selected + '",\"left\")\'>' + selected + '</option>';
        $(this).remove();
        rList.append(option);
      }
    });
  }
}

function pcc_radio(player, value) {
  var char1;
  var char2;
  var char3;
  var label;
  var pcc;

  if (player == 1) {
    char1 = $("#p1_charList1");
    char2 = $("#p1_charList2");
    char3 = $("#p1_charList3");
    label = $("#p1_charLabel");
    pcc = "p1cc";
  } else if (player == 2) {
    char1 = $("#p2_charList1");
    char2 = $("#p2_charList2");
    char3 = $("#p2_charList3");
    label = $("#p2_charLabel");
    pcc = "p2cc";
  }

  var randTxt = "P" + player + " Random Character";
  var labelTxt = "Choose Your Character";
  var temp;

  if (value == 0) {
    //TODO Random
    pcc_radio(player, 3);
  } else if (value == 1) {
    char1.show();
    char2.hide();
    char3.hide();
    label.html(labelTxt);
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
    console.log("pcc_radio| Error | value out of scope: " + value);
  }

  maxTeamSize = value - 1;
  if(maxTeamSize < 0){
    maxTeamSize = 2;
  }
  console.log("maxTeamSize | " + maxTeamSize);
}

function randChar(player) { //Triggers when P1 Random Characters Checkbox changed
  var p1; //if checked returns true
  var hideRand;
  var charSelect;
  var pcc0;
  var pcc3;

  if(player == 1){
    p1 = $("#p1_randChar").is(":checked"); //if checked returns true
    hideRand = $("#p1cc_hideRandom");
    charSelect = $("#p1_charSelect");
    pcc0 = "#p1_cc_0";
    pcc3 = "#p1_cc_3";
  } else if (player == 2){
    p1 = $("#p2_randChar").is(":checked"); //if checked returns true
    hideRand = $("#p2cc_hideRandom");
    charSelect = $("#p2_charSelect");
    pcc0 = "#p2_cc_0";
    pcc3 = "#p2_cc_3";
  }

  if (p1) { //when checkbox is true
    charSelect.hide(); //Hide charSelect
    hideRand.show(); //display Random
  } else { //when checkbox is false
    hideRand.hide(); //Hide Random
    charSelect.show(); //Show char select
    if ($(pcc0).checked == true) {
      $(pcc0).checked = false;
      $(pcc3).checked = true;
    }
    pcc_radio(1,3);
  }
}
